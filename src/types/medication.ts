export interface Medication {
  id: string;
  name: string;
  dose: string;
  frequency: string;
  time: string;
  startDate: string;
  endDate: string;
  taken: boolean;
  createdAt: string;
}

export type MedicationFormData = Omit<Medication, 'id' | 'taken' | 'createdAt'>;
