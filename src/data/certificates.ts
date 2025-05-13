import { Certificate } from '../types/certificate';

export const certificates: Certificate[] = [
  {
    "serialNumber": "MTPL/PR/2024/1001",
    "name": "Saloni Kushwaha",
    "dateOfIssue": "2023-08-01",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "A",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1002",
    "name": "Farhat Naaz",
    "dateOfIssue": "2024-08-01",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "A",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1003",
    "name": "Riya Mathur",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "A+",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1004",
    "name": "Divya Bobde",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "A+",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1005",
    "name": "Rishabh Raj",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B+",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1006",
    "name": "Sujit Kumar",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1007",
    "name": "Mudrika Patel",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B+",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1008",
    "name": "Satyam Turkar",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1009",
    "name": "Saurabh Kumar",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1010",
    "name": "Prince Prasad",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1011",
    "name": "Shivam Kumar Tiwari",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1012",
    "name": "Vivek Kumar",
    "dateOfIssue": "2024-10-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1017",
    "name": "Naman Kumar",
    "dateOfIssue": "2025-03-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "A",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1018",
    "name": "Suhani Tiwari",
    "dateOfIssue": "2025-03-31",
    "college": "TIT Technoctas Group",
    "course": "UI/UX Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1019",
    "name": "Shalu Tiwari",
    "dateOfIssue": "2025-03-31",
    "college": "UI/UX Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "B",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1020",
    "name": "Anuj Raj",
    "dateOfIssue": "2025-03-31",
    "college": "TIT Technoctas Group",
    "course": "Backend Web Development",
    "grade": "A+",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1021",
    "name": "Saud Ansari",
    "dateOfIssue": "2025-03-31",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "A+",
    "validUntil": "Unlimited"
  },
  {
    "serialNumber": "MTPL/PR/2024/1022",
    "name": "Parmanand Hanwat",
    "dateOfIssue": "2025-04-04",
    "college": "TIT Technoctas Group",
    "course": "Frontend Web Development",
    "grade": "A",
    "validUntil": "Unlimited"
  }
];

export const getCertificate = (serialNumber: string): Certificate | undefined => {
  return certificates.find(cert => cert.serialNumber === serialNumber);
};

// Local Storage Implementation
const STORAGE_KEY = 'verified_certificates';

export const saveToLocalStorage = (certificate: Certificate) => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  const verifiedCertificates = existingData ? JSON.parse(existingData) : [];
  
  // Check if certificate already exists
  const exists = verifiedCertificates.some(
    (cert: Certificate) => cert.serialNumber === certificate.serialNumber
  );
  
  if (!exists) {
    verifiedCertificates.push({
      ...certificate,
      verificationDate: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(verifiedCertificates));
  }
};

export const getVerificationHistory = (): (Certificate & { verificationDate: string })[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};