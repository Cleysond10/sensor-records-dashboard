import { IRecord } from "../../types/schema"
import * as S from './styles'

interface ITableProps {
  records: IRecord[]
}

export const Table = ({ records }: ITableProps) => {
  return (
    <S.Table>
    <S.TableHead>
      <tr>
        <S.TableHeader>#</S.TableHeader>
        <S.TableHeader>Sensor</S.TableHeader>
        <S.TableHeader>Timestamp</S.TableHeader>
        <S.TableHeader>Valor</S.TableHeader>
      </tr>
    </S.TableHead>
    <S.TableBody>
      {records.map(({ id, equipment_id, value, timestamp }: IRecord) => (
        <S.TableRow key={id}>
          <S.TableCell>{id}</S.TableCell>
          <S.TableCell>{equipment_id}</S.TableCell>
          <S.TableCell>{timestamp}</S.TableCell>
          <S.TableCell>{value}</S.TableCell>
        </S.TableRow>
      ))}
    </S.TableBody>
  </S.Table>
  )
}
