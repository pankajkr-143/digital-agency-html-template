import { User, LoginCredentials } from '../types/user';

export const users: (User & { password: string })[] = [
  {
    id: '1',
    email: 'mrmacky143@gmail.com',
    password: 'Macky989',
    name: 'Pankaj Gupta',
    role: 'CEO & Founder',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    employeeId: 'EMP001',
    department: 'Engineering',
    position: 'Senior Software Developer',
    hireDate: '2021-03-15',
    workDuration: '2 years, 8 months',
    birthDate: '1990-05-20',
    address: '123 Tech Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    country: 'USA',
    phone: '+1 (555) 123-4567',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    },
    salary: {
      amount: 120000,
      currency: 'USD',
      lastReview: '2023-01-15',
      nextReview: '2024-01-15'
    },
    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      visionInsurance: true,
      lifeInsurance: true,
      retirement401k: true
    },
    documents: {
      resume: 'path/to/resume.pdf',
      contract: 'path/to/contract.pdf',
      idCard: 'path/to/id.pdf'
    },
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'AWS',
      'Docker'
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issueDate: '2022-06-15',
        expiryDate: '2025-06-15',
        credentialId: 'AWS-DEV-123'
      },
      {
        name: 'React Advanced Developer',
        issueDate: '2023-01-10',
        expiryDate: '2026-01-10',
        credentialId: 'RAD-456'
      }
    ],
    performance: {
      lastReview: {
        date: '2023-01-15',
        rating: 4.8,
        feedback: 'Excellent performance and team collaboration'
      },
      goals: [
        'Lead the migration to microservices architecture',
        'Mentor junior developers',
        'Improve system performance by 25%'
      ]
    },
    projects: [
      {
        name: 'E-commerce Platform Redesign',
        role: 'Tech Lead',
        startDate: '2023-01-01',
        endDate: '2023-06-30',
        status: 'Completed'
      },
      {
        name: 'Cloud Migration Initiative',
        role: 'Senior Developer',
        startDate: '2023-07-01',
        endDate: null,
        status: 'In Progress'
      }
    ],
    attendance: {
      totalLeaves: 15,
      leavesUsed: 5,
      leavesRemaining: 10,
      leaveHistory: [
        {
          type: 'Vacation',
          startDate: '2023-07-10',
          endDate: '2023-07-14',
          status: 'Approved'
        },
        {
          type: 'Sick Leave',
          startDate: '2023-09-05',
          endDate: '2023-09-05',
          status: 'Approved'
        }
      ]
    }
  },
  {
    id: '2',
    email: 'sarah@example.com',
    password: 'sarah123',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
    employeeId: 'EMP002',
    department: 'Design',
    position: 'Senior UI/UX Designer',
    hireDate: '2020-06-01',
    workDuration: '3 years, 5 months',
    birthDate: '1992-08-15',
    address: '456 Design Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    phone: '+1 (555) 234-5678',
    emergencyContact: {
      name: 'Mike Chen',
      relationship: 'Brother',
      phone: '+1 (555) 876-5432'
    },
    salary: {
      amount: 110000,
      currency: 'USD',
      lastReview: '2023-02-15',
      nextReview: '2024-02-15'
    },
    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      visionInsurance: true,
      lifeInsurance: true,
      retirement401k: true
    },
    documents: {
      resume: 'path/to/resume.pdf',
      contract: 'path/to/contract.pdf',
      idCard: 'path/to/id.pdf'
    },
    skills: [
      'UI Design',
      'UX Research',
      'Figma',
      'Adobe XD',
      'Sketch',
      'Prototyping'
    ],
    certifications: [
      {
        name: 'Google UX Design Certificate',
        issueDate: '2022-03-20',
        expiryDate: null,
        credentialId: 'GUX-789'
      }
    ],
    performance: {
      lastReview: {
        date: '2023-02-15',
        rating: 4.7,
        feedback: 'Outstanding design work and user research'
      },
      goals: [
        'Implement design system',
        'Improve user engagement metrics',
        'Lead design workshops'
      ]
    },
    projects: [
      {
        name: 'Mobile App Redesign',
        role: 'Lead Designer',
        startDate: '2023-02-01',
        endDate: '2023-05-30',
        status: 'Completed'
      },
      {
        name: 'Design System Implementation',
        role: 'Senior Designer',
        startDate: '2023-06-01',
        endDate: null,
        status: 'In Progress'
      }
    ],
    attendance: {
      totalLeaves: 15,
      leavesUsed: 7,
      leavesRemaining: 8,
      leaveHistory: [
        {
          type: 'Vacation',
          startDate: '2023-08-01',
          endDate: '2023-08-07',
          status: 'Approved'
        }
      ]
    }
  },
  {
    id: '3',
    email: 'mike@example.com',
    password: 'mike123',
    name: 'Mike Johnson',
    role: 'Product Manager',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    employeeId: 'EMP003',
    department: 'Product',
    position: 'Senior Product Manager',
    hireDate: '2019-09-15',
    workDuration: '4 years, 2 months',
    birthDate: '1988-12-10',
    address: '789 Product Lane',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    country: 'USA',
    phone: '+1 (555) 345-6789',
    emergencyContact: {
      name: 'Lisa Johnson',
      relationship: 'Spouse',
      phone: '+1 (555) 765-4321'
    },
    salary: {
      amount: 130000,
      currency: 'USD',
      lastReview: '2023-03-15',
      nextReview: '2024-03-15'
    },
    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      visionInsurance: true,
      lifeInsurance: true,
      retirement401k: true
    },
    documents: {
      resume: 'path/to/resume.pdf',
      contract: 'path/to/contract.pdf',
      idCard: 'path/to/id.pdf'
    },
    skills: [
      'Product Strategy',
      'Agile',
      'Market Research',
      'Data Analysis',
      'Project Management',
      'Stakeholder Management'
    ],
    certifications: [
      {
        name: 'Product Management Professional',
        issueDate: '2021-11-30',
        expiryDate: '2024-11-30',
        credentialId: 'PMP-101'
      },
      {
        name: 'Agile Certified Practitioner',
        issueDate: '2022-05-15',
        expiryDate: '2025-05-15',
        credentialId: 'ACP-202'
      }
    ],
    performance: {
      lastReview: {
        date: '2023-03-15',
        rating: 4.9,
        feedback: 'Exceptional product leadership and strategic thinking'
      },
      goals: [
        'Launch new product line',
        'Increase user retention by 30%',
        'Develop product team'
      ]
    },
    projects: [
      {
        name: 'Product Analytics Platform',
        role: 'Product Owner',
        startDate: '2023-01-15',
        endDate: '2023-08-30',
        status: 'Completed'
      },
      {
        name: 'Market Expansion Initiative',
        role: 'Product Lead',
        startDate: '2023-09-01',
        endDate: null,
        status: 'In Progress'
      }
    ],
    attendance: {
      totalLeaves: 15,
      leavesUsed: 4,
      leavesRemaining: 11,
      leaveHistory: [
        {
          type: 'Vacation',
          startDate: '2023-06-20',
          endDate: '2023-06-23',
          status: 'Approved'
        }
      ]
    }
  }
];

export const login = (credentials: LoginCredentials): User | null => {
  const user = users.find(
    u => u.email === credentials.email && u.password === credentials.password
  );
  
  if (user) {
    const { password, ...userWithoutPassword } = user;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  }
  
  return null;
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const updateUser = (userId: string, updates: Partial<User>) => {
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updates };
    return true;
  }
  return false;
};