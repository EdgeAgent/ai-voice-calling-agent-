import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { MOCK_CONTACTS } from '../constants';
import { Contact, LeadStatus } from '../types';

const Contacts: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>(MOCK_CONTACTS);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
            // In a real app, you would parse the CSV here.
            console.log("File selected:", event.target.files[0].name);
        }
    };
    
    const getStatusColor = (status: LeadStatus) => {
        switch (status) {
            case LeadStatus.Qualified: return 'bg-green-900 text-green-300';
            case LeadStatus.CallbackScheduled: return 'bg-blue-900 text-blue-300';
            case LeadStatus.Contacted: return 'bg-purple-900 text-purple-300';
            case LeadStatus.NotQualified: return 'bg-red-900 text-red-300';
            default: return 'bg-gray-700 text-gray-300';
        }
    };

    return (
        <Card>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Contact List</h2>
                <div>
                    <input
                        type="file"
                        id="csv-upload"
                        className="hidden"
                        accept=".csv"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="csv-upload" className="cursor-pointer">
                        {/* FIX: Removed unsupported 'as' prop from Button component. */}
                        <Button variant="secondary">
                            {fileName ? `Uploaded: ${fileName}` : 'Upload CSV'}
                        </Button>
                    </label>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-dark-border">
                            <th className="p-4 text-sm font-semibold text-dark-text-secondary">Name</th>
                            <th className="p-4 text-sm font-semibold text-dark-text-secondary">Phone</th>
                            <th className="p-4 text-sm font-semibold text-dark-text-secondary">Email</th>
                            <th className="p-4 text-sm font-semibold text-dark-text-secondary">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id} className="border-b border-dark-border hover:bg-dark-bg">
                                <td className="p-4 text-white">{contact.name}</td>
                                <td className="p-4 text-dark-text">{contact.phone}</td>
                                <td className="p-4 text-dark-text">{contact.email}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                                        {contact.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default Contacts;