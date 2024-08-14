import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { IGroupedRecord } from '../../types/common';

interface ITableProps {
  records: IGroupedRecord[];
}

export const LinesChart = ({ records }: ITableProps) => {
    return (
      <BarChart
        width={800}
        height={400}
        data={records}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="equipment_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="averageValue" name="Valor Médio" fill="#646cff" activeBar={<Rectangle fill="#535bf2" stroke="#535bf2" />} />
      </BarChart>
  );
}
