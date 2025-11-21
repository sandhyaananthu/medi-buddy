import { Medication } from "@/types/medication";

const STORAGE_KEY = "medications";

export const getMedications = (): Medication[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveMedication = (medication: Medication): void => {
  const medications = getMedications();
  medications.push(medication);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(medications));
};

export const updateMedication = (id: string, updates: Partial<Medication>): void => {
  const medications = getMedications();
  const index = medications.findIndex(med => med.id === id);
  if (index !== -1) {
    medications[index] = { ...medications[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(medications));
  }
};

export const deleteMedication = (id: string): void => {
  const medications = getMedications();
  const filtered = medications.filter(med => med.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

export const markAsTaken = (id: string): void => {
  updateMedication(id, { taken: true });
};
