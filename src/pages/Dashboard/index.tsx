import { useEffect, useState } from 'react';
import { IRecord } from '../../types/schema'
import { Table } from '../../components/Table';
import RecordsService from '../../services/Records';
import { LinesChart } from '../../components/LineChart';
import { IGroupedRecord, PeriodEnum } from '../../types/common';
import * as S from './styles'

export const Dashboard = () => {
  const [records, setRecords] = useState<IRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [chartPeriod, setChartPeriod] = useState<number>(PeriodEnum.LAST_7_DAYS);

  const HOUR_IN_MS = 1000 * 60 * 60;

  const recordsFilteredByPeriod = records.filter(({ timestamp }) => {
    const recordDate = new Date(timestamp);
    const diffHours = (Date.now() - recordDate.getTime()) / HOUR_IN_MS;
    return diffHours <= chartPeriod;
  });

  const initializeEquipmentGroup = () => ({
    totalValue: 0,
    count: 0,
  });

  const updateEquipmentGroup = (group: { totalValue: number; count: number }, value: number) => {
    group.totalValue += value;
    group.count += 1;
    return group;
  };

  const calculateAverageValue = (group: { totalValue: number; count: number }) => {
    return group.totalValue / group.count;
  };

  const groupRecordsByEquipment = (): IGroupedRecord[] => {
    const grouped = recordsFilteredByPeriod.reduce((acc, item) => {
      if (!acc[item.equipment_id]) {
        acc[item.equipment_id] = initializeEquipmentGroup();
      }
      acc[item.equipment_id] = updateEquipmentGroup(acc[item.equipment_id], item.value);
      return acc;
    }, {} as Record<string, { totalValue: number; count: number }>);

    return Object.keys(grouped).map((key) => ({
      equipment_id: key,
      averageValue: calculateAverageValue(grouped[key]),
    }));
  };

  const handleButtonSelected = (period: number) => {
    return chartPeriod === period;
  }

  const getRecords = async () => {
    try {
      setLoading(true);
      const records = await RecordsService.getRecords();
      setRecords(records);
    } catch (error) {
      console.error('Erro ao buscar registros', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <S.Container>
      <h1>Dashboad de Registros dos Sensores</h1>

      <S.Actions>
        <S.Button selected={handleButtonSelected(PeriodEnum.LAST_24_HOURS)} onClick={() => setChartPeriod(PeriodEnum.LAST_24_HOURS)}>Últimas 24 horas</S.Button>
        <S.Button selected={handleButtonSelected(PeriodEnum.LAST_7_DAYS)} onClick={() => setChartPeriod(PeriodEnum.LAST_7_DAYS)}>Últimos 7 dias</S.Button>
        <S.Button selected={handleButtonSelected(PeriodEnum.LAST_30_DAYS)} onClick={() => setChartPeriod(PeriodEnum.LAST_30_DAYS)}>Últimos 30 dias</S.Button>
      </S.Actions>

      {loading ? (
        <div>
          <h3>Carregando gráfico...</h3>
          <S.Divider />
          <h3>Carregando tabela...</h3>
        </div>
      ): (
      <div>
        <LinesChart records={groupRecordsByEquipment()} />
        <S.Divider />
        <Table records={records} />
      </div>
      )}
    </S.Container>
  )
}
