export type TDeath = {
  birthRegNo?: string;
  birthDate?: string;

  address1: string;
  address2: string;
  dateOfRegistration: string;
  dateOfIssuance: string;
  deathRegNo: string;
  dateOfBirth: string;
  qrCode: string;
  dateOfDeath: string;
  sex: "Male" | "Female" | "Other";

  nameBn: string;
  nameEn: string;
  fatherNameBn: string;
  fatherNameEn: string;
  motherNameBn: string;
  motherNameEn: string;

  placeOfDeath: string;
  causeOfDeath: string;

  fatherNationalityBn: string;
  fatherNationalityEn: string;
  motherNationalityBn: string;
  motherNationalityEn: string;
};
