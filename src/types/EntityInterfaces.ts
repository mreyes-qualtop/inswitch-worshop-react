export interface CreatedEntity {
    entityId:string;
    users: User[];
    name: Name;
    contact: Contact;
    beneficiaries: Beneficiary[];
    idDocuments: IdDocument[];
    dateOfBirth: string; // YYYY-MM-DD
    birthCountry: string;
    nationality: string;
    residenceCountry: string;
    occupation: string;
    gender: "m" | "f";
    entityProfileData: KeyValue[];
    metadata: KeyValue[];
    entityType: "naturalPerson" | "legalEntity";
    parentId: string;
    entityStatus: "pre-active" | "active" | "default";
    entitySubStatus: string | null;
    subStatus: string | null;
    entitySubStatusDescription: string;
  }
  
  interface User {
    usernameType: "mobile" | "email" | "text";
    username: string;
    secrets: Secret[];
  }
  
  interface Secret {
    secretType: "password" | "pin";
    secretValue: string;
  }
  
  interface Name {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    secondlastName: string;
    fullName: string;
    nativeName: string;
  }
  
  interface Contact {
    phoneNumber: string;
    email: string;
    firstName: string;
    lastName: string;
    postalAddress: PostalAddress;
  }
  
  export interface PostalAddress {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    city: string;
    stateProvince: string;
    postalCode: string;
    country: string;
    canton: string;
  }
  
  interface Beneficiary {
    name: string;
    middleName: string;
    lastName: string;
    secondLastName: string;
    document: IdDocument;
    percentage: number;
  }
  
  interface IdDocument {
    idType: "residentId" | "nationalId" | "passport" | "ruc" | "diplomatId";
    idNumber: string;
    issueDate: string; // YYYY-MM-DD
    expiryDate: string; // YYYY-MM-DD
    issuer: string;
    issuerPlace: string;
    issuerCountry: string;
    otherDescription: string;
  }
  
  interface KeyValue {
    key: string;
    value: string;
  }
  
  // informacion default
type FormData = CreatedEntity;

export const initialFormData: FormData = {
  entityId:"0",
  users: [
    {
      usernameType: "mobile",
      username: "usuario1",
      secrets: [
        { secretType: "password", secretValue: "contrasena123" },
        { secretType: "pin", secretValue: "1234" },
      ],
    },
    {
      usernameType: "mobile",
      username: "usuario2",
      secrets: [
        { secretType: "password", secretValue: "contrasena456" },
        { secretType: "pin", secretValue: "5678" },
      ],
    },
  ],
  name: {
    title: "Sr.",
    firstName: "Juan",
    middleName: "M.",
    lastName: "Pérez",
    secondlastName: "López",
    fullName: "Juan M. Pérez López",
    nativeName: "Juan Pérez",
  },
  contact: {
    phoneNumber: "+525512345678",
    email: "juan.perez@ejemplo.com",
    firstName: "Juan",
    lastName: "Pérez",
    postalAddress: {
      addressLine1: "Calle Principal 123",
      addressLine2: "Depto 4B",
      addressLine3: "Edificio A",
      city: "Ciudad de México",
      stateProvince: "CDMX",
      postalCode: "01000",
      country: "MX",
      canton: "Canton A",
    },
  },
  beneficiaries: [
    {
      name: "María",
      middleName: "A.",
      lastName: "González",
      secondLastName: "Fernández",
      document: {
        idType: "residentId",
        idNumber: "R123456",
        issueDate: "2023-01-01",
        expiryDate: "2033-01-01",
        issuer: "Gobierno",
        issuerPlace: "Ciudad A",
        issuerCountry: "MX",
        otherDescription: "Ninguna",
      },
      percentage: 50,
    },
    {
      name: "Carlos",
      middleName: "B.",
      lastName: "Ramírez",
      secondLastName: "López",
      document: {
        idType: "nationalId",
        idNumber: "N654321",
        issueDate: "2022-01-01",
        expiryDate: "2032-01-01",
        issuer: "Gobierno",
        issuerPlace: "Ciudad B",
        issuerCountry: "MX",
        otherDescription: "Ninguna",
      },
      percentage: 50,
    },
  ],
  idDocuments: [
    {
      idType: "passport",
      idNumber: "P1234567",
      issueDate: "2021-01-01",
      expiryDate: "2031-01-01",
      issuer: "Gobierno",
      issuerPlace: "Ciudad C",
      issuerCountry: "MX",
      otherDescription: "Ninguna",
    },
    {
      idType: "ruc",
      idNumber: "RUC789456",
      issueDate: "2020-01-01",
      expiryDate: "2030-01-01",
      issuer: "Gobierno",
      issuerPlace: "Ciudad D",
      issuerCountry: "MX",
      otherDescription: "Ninguna",
    },
  ],
  dateOfBirth: "1985-05-15",
  birthCountry: "MX",
  nationality: "MX",
  residenceCountry: "MX",
  occupation: "Ingeniero de Software",
  gender: "m",
  entityProfileData: [
    { key: "perfil1", value: "valor1" },
    { key: "perfil2", value: "valor2" },
  ],
  metadata: [
    { key: "metadata1", value: "valor1" },
    { key: "metadata2", value: "valor2" },
  ],
  entityType: "naturalPerson",
  parentId: "padre123",
  entityStatus: "default",
  entitySubStatus: null,
  subStatus: null,
  entitySubStatusDescription: "La entidad está activa",
};