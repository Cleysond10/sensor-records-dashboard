import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: rgba(205, 205, 205);
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #2a2a2a;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #646cff;
`;

export const TableHeader = styled.th`
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #535bf2;
`;
