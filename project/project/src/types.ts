// Existing types...

export interface ChemicalProduct {
  id: string;
  materialCode: string;
  name: string;
  cas: string; // CAS Registry Number
  un: string; // UN Number
  hazardClass: string;
  packingGroup: string;
  flashPoint: number;
  riskPhrases: string[];
  safetyPhrases: string[];
  storageClass: string;
  incompatibilities: string[];
  manufacturer: string;
  supplier: string;
  fispq: {
    number: string;
    revision: string;
    date: Date;
    url: string;
  };
  storage: {
    maxQuantity: number;
    currentQuantity: number;
    unit: string;
    location: string;
  };
  controlledProduct: boolean;
  controlAuthority: string;
  licenseNumber?: string;
  expirationDate?: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  role: 'admin' | 'technician' | 'user';
  permissions: string[];
}