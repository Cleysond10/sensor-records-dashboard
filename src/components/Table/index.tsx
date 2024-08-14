import { IRecord } from "../../types/schema.types"

interface ITableProps {
  records: IRecord[]
}

export const Table = ({ records }: ITableProps) => {
  return (
    <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Sensor</th>
        <th>Timestamp</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      {records.map(({ id, equipment_id, value, timestamp }: IRecord) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{equipment_id}</td>
          <td>{timestamp}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}
