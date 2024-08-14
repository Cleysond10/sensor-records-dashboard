import * as S from './styles'
import { useEffect, useState } from 'react';
import { IRecord } from '../../types/schema.types'
import { Table } from '../../components/Table';

export const Dashboard = () => {
  const [records, setRecords] = useState<IRecord[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecords(data);
      });
  }, []);

  return (
    <S.Container>
      <Table records={records} />
    </S.Container>
  )
}
