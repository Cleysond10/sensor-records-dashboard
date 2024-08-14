import { IRecord } from "../../types/schema.types";

const RecordsService = {
  getRecords: async (): Promise<IRecord[]> => {
    const response = await fetch('http://localhost:8000/')
    const data = await response.json()
    console.log(data)
    return data
  },
}

export default RecordsService;
