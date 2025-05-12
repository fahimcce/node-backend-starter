export type TSorokka = {
  certificateNo: string;
  nidNo?: string;
  birthNo?: string;
  name: string;
  nationalId: string;
  passportNo: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  nationality: string;
  vaccinationBy: string;
  doseDetails: {
    date: string;
    name: string;
  }[];
  vaccinationCenter: string;
  totalDoseGiven: string;
};
