
export enum View {
  Dashboard = 'Dashboard',
  Campaigns = 'Campaigns',
  Contacts = 'Contacts',
  CallMonitoring = 'Call Monitoring',
  Settings = 'Settings',
}

export enum LeadStatus {
  NotContacted = 'Not Contacted',
  Contacted = 'Contacted',
  Qualified = 'Qualified',
  NotQualified = 'Not Qualified',
  CallbackScheduled = 'Callback Scheduled'
}

export interface Campaign {
  id: number;
  name: string;
  script: string;
  status: 'Active' | 'Paused' | 'Completed';
  contacts: number;
  completion: number;
}

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: LeadStatus;
}

export interface ActiveCall {
    id: number;
    contact: Contact;
    duration: number;
    transcript: string[];
}
