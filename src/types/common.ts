export interface IGroupedRecord {
  equipment_id: string;
  averageValue: number;
};

export enum PeriodEnum {
  LAST_24_HOURS = 24,
  LAST_7_DAYS = 168,
  LAST_30_DAYS = 720,
}
