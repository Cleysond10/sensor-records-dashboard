import { IRecord } from "../../types/schema";

const ApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const RecordsService = {
  getRecords: async (): Promise<IRecord[]> => {
    const response = await fetch(`${ApiUrl}/records`)
    const data = await response.json()
    return data
  },
}

export default RecordsService;
