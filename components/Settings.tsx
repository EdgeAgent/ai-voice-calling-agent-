
import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const Settings: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-white">Settings</h1>

            <Card>
                <h2 className="text-xl font-semibold border-b border-dark-border pb-4 mb-6 text-white">Voice & Language</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="voice-select" className="block text-sm font-medium text-dark-text-secondary mb-1">AI Voice</label>
                        <select id="voice-select" className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary">
                            <option>Neural Male 1 (US English)</option>
                            <option>Neural Male 2 (US English)</option>
                            <option>Neural Male 3 (UK English)</option>
                            <option>Neural Female 1 (US English)</option>
                            <option>Neural Female 2 (US English)</option>
                            <option>Neural Female 3 (AU English)</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="language-select" className="block text-sm font-medium text-dark-text-secondary mb-1">Language</label>
                        <select id="language-select" disabled className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-not-allowed">
                            <option>English (United States)</option>
                        </select>
                         <p className="text-xs text-dark-text-secondary mt-1">More languages coming soon.</p>
                    </div>
                </div>
            </Card>

            <Card>
                <h2 className="text-xl font-semibold border-b border-dark-border pb-4 mb-6 text-white">Calling Hours</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div>
                        <label htmlFor="timezone" className="block text-sm font-medium text-dark-text-secondary mb-1">Timezone</label>
                        <select id="timezone" className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary">
                            <option>UTC-8:00 Pacific Time (US & Canada)</option>
                            <option>UTC-5:00 Eastern Time (US & Canada)</option>
                            <option>UTC+0:00 Greenwich Mean Time</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="start-time" className="block text-sm font-medium text-dark-text-secondary mb-1">Start Time</label>
                        <input type="time" id="start-time" defaultValue="09:00" className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"/>
                    </div>
                    <div>
                        <label htmlFor="end-time" className="block text-sm font-medium text-dark-text-secondary mb-1">End Time</label>
                        <input type="time" id="end-time" defaultValue="17:00" className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"/>
                    </div>
                </div>
            </Card>

            <Card>
                <h2 className="text-xl font-semibold border-b border-dark-border pb-4 mb-6 text-white">Compliance</h2>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium text-white">Do-Not-Call (DNC) List Checking</h3>
                        <p className="text-sm text-dark-text-secondary">Automatically check contacts against your DNC list before dialing.</p>
                    </div>
                     <label htmlFor="dnc-toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="dnc-toggle" className="sr-only" defaultChecked/>
                            <div className="block bg-dark-border w-14 h-8 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                    </label>
                </div>
                 <style>{`
                    input:checked ~ .dot {
                        transform: translateX(100%);
                        background-color: #4F46E5;
                    }
                `}</style>
            </Card>

            <div className="flex justify-end">
                <Button>Save Changes</Button>
            </div>
        </div>
    );
};

export default Settings;
