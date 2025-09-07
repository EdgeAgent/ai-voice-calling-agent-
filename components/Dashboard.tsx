
import React from 'react';
import Card from './ui/Card';
import { DASHBOARD_STATS, CALL_ACTIVITY_DATA, MOCK_CONTACTS } from '../constants';
import { LeadStatus } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Dashboard: React.FC = () => {
  const upcomingAppointments = MOCK_CONTACTS.filter(c => c.status === LeadStatus.CallbackScheduled);

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_STATS.map((stat) => (
          <Card key={stat.name}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-text-secondary">{stat.name}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-green-400">{stat.change} vs last month</p>
              </div>
              <div className="text-4xl p-3 bg-dark-bg rounded-lg">{stat.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Call Activity Chart */}
        <Card className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-white">Call Activity (Last 7 Days)</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CALL_ACTIVITY_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    color: '#D1D5DB'
                  }}
                />
                <Bar dataKey="calls" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-white">Upcoming Appointments</h2>
          <div className="space-y-4">
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map(contact => (
                <div key={contact.id} className="flex items-center justify-between bg-dark-bg p-3 rounded-lg">
                  <div>
                    <p className="font-semibold text-white">{contact.name}</p>
                    <p className="text-sm text-dark-text-secondary">{contact.phone}</p>
                  </div>
                   <span className="text-xs font-medium bg-blue-900 text-blue-300 px-2 py-1 rounded-full">Today</span>
                </div>
              ))
            ) : (
              <p className="text-dark-text-secondary">No upcoming appointments.</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
