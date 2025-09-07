
import { View, Campaign, Contact, LeadStatus, ActiveCall } from './types';

export const NAV_ITEMS = [
  { id: View.Dashboard, icon: '🏠' },
  { id: View.Campaigns, icon: '🚀' },
  { id: View.Contacts, icon: '👥' },
  { id: View.CallMonitoring, icon: '👁️' },
  { id: View.Settings, icon: '⚙️' },
];

export const MOCK_CAMPAIGNS: Campaign[] = [
  { id: 1, name: 'Q4 Real Estate Leads', script: 'Hello, are you interested in selling your property?', status: 'Active', contacts: 1200, completion: 75 },
  { id: 2, name: 'SaaS Demo Bookings', script: 'Hi, I\'m calling from SaaS Inc. to schedule a demo.', status: 'Active', contacts: 850, completion: 40 },
  { id: 3, name: 'Insurance Policy Follow-up', script: 'Following up on your recent insurance inquiry...', status: 'Paused', contacts: 500, completion: 90 },
  { id: 4, name: 'B2B Lead Qualification', script: 'Hello, I\'m calling to qualify your company for our B2B services.', status: 'Completed', contacts: 2500, completion: 100 },
];

export const MOCK_CONTACTS: Contact[] = [
  { id: 1, name: 'John Doe', phone: '(555) 123-4567', email: 'john.doe@example.com', status: LeadStatus.Qualified },
  { id: 2, name: 'Jane Smith', phone: '(555) 987-6543', email: 'jane.smith@example.com', status: LeadStatus.Contacted },
  { id: 3, name: 'Michael Johnson', phone: '(555) 555-1212', email: 'michael.j@example.com', status: LeadStatus.NotContacted },
  { id: 4, name: 'Emily Davis', phone: '(555) 867-5309', email: 'emily.d@example.com', status: LeadStatus.CallbackScheduled },
  { id: 5, name: 'Robert Brown', phone: '(555) 246-8135', email: 'robert.b@example.com', status: LeadStatus.NotQualified },
];

export const MOCK_ACTIVE_CALLS: ActiveCall[] = [
  { id: 1, contact: MOCK_CONTACTS[1], duration: 45, transcript: ['AI: Hello Jane, this is Alex from VoiceFlow.', 'Jane: Hi Alex, how can I help you?', 'AI: I\'m calling to follow up on your recent inquiry about our services.'] },
  { id: 2, contact: {id: 6, name: 'Chris Wilson', phone: '(555) 333-4444', email: 'chris.w@example.com', status: LeadStatus.Contacted}, duration: 12, transcript: ['AI: Hello, may I speak with Chris?'] },
  { id: 3, contact: {id: 7, name: 'Patricia Miller', phone: '(555) 777-8888', email: 'patricia.m@example.com', status: LeadStatus.Contacted}, duration: 88, transcript: ['AI: That sounds great, Patricia. I can schedule that for you.', 'Patricia: Perfect, thank you so much for your help.'] },
];

export const DASHBOARD_STATS = [
    { name: 'Calls Made', value: '12,450', change: '+12.5%', icon: '📞' },
    { name: 'Contacts Reached', value: '8,980', change: '+8.2%', icon: '✅' },
    { name: 'Appointments Scheduled', value: '412', change: '+21.3%', icon: '📅' },
    { name: 'Qualified Leads', value: '1,347', change: '+15.1%', icon: '⭐' },
];

export const CALL_ACTIVITY_DATA = [
    { name: 'Mon', calls: 400 },
    { name: 'Tue', calls: 300 },
    { name: 'Wed', calls: 600 },
    { name: 'Thu', calls: 800 },
    { name: 'Fri', calls: 750 },
    { name: 'Sat', calls: 200 },
    { name: 'Sun', calls: 150 },
];
