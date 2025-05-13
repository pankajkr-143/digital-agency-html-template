export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  employeeId: string;
  department: string;
  position: string;
  hireDate: string;
  workDuration: string;
  birthDate: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  salary: {
    amount: number;
    currency: string;
    lastReview: string;
    nextReview: string;
  };
  benefits: {
    healthInsurance: boolean;
    dentalInsurance: boolean;
    visionInsurance: boolean;
    lifeInsurance: boolean;
    retirement401k: boolean;
  };
  documents: {
    resume: string;
    contract: string;
    idCard: string;
  };
  skills: string[];
  certifications: {
    name: string;
    issueDate: string;
    expiryDate: string | null;
    credentialId: string;
  }[];
  performance: {
    lastReview: {
      date: string;
      rating: number;
      feedback: string;
    };
    goals: string[];
  };
  projects: {
    name: string;
    role: string;
    startDate: string;
    endDate: string | null;
    status: string;
  }[];
  attendance: {
    totalLeaves: number;
    leavesUsed: number;
    leavesRemaining: number;
    leaveHistory: {
      type: string;
      startDate: string;
      endDate: string;
      status: string;
    }[];
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}