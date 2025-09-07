
import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { MOCK_CAMPAIGNS } from '../constants';
import { Campaign } from '../types';
import { generateScript } from '../services/geminiService';

const CampaignModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: (campaign: Omit<Campaign, 'id' | 'status' | 'contacts' | 'completion'>) => void;
}> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [scriptPrompt, setScriptPrompt] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateScript = async () => {
    if (!scriptPrompt) return;
    setIsLoading(true);
    const script = await generateScript(scriptPrompt);
    setGeneratedScript(script);
    setIsLoading(false);
  };

  const handleSave = () => {
    onSave({ name, script: generatedScript });
    onClose();
    setName('');
    setScriptPrompt('');
    setGeneratedScript('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-dark-card rounded-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Create New Campaign</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-text-secondary mb-1">Campaign Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g., Q1 SaaS Outreach"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-text-secondary mb-1">Describe Your Script Goal</label>
            <input
              type="text"
              value={scriptPrompt}
              onChange={(e) => setScriptPrompt(e.target.value)}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="e.g., A script to book demos for a marketing analytics tool"
            />
            <Button onClick={handleGenerateScript} disabled={isLoading} className="mt-2">
              {isLoading ? 'Generating...' : '✨ Generate with AI'}
            </Button>
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-text-secondary mb-1">Generated Script</label>
            <textarea
              value={generatedScript}
              onChange={(e) => setGeneratedScript(e.target.value)}
              rows={10}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-white whitespace-pre-wrap focus:outline-none focus:ring-2 focus:ring-brand-primary"
              placeholder="AI will generate your script here..."
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={!name || !generatedScript}>Save Campaign</Button>
        </div>
      </div>
    </div>
  );
};

const Campaigns: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [campaigns, setCampaigns] = useState<Campaign[]>(MOCK_CAMPAIGNS);

    const handleSaveCampaign = (newCampaignData: Omit<Campaign, 'id' | 'status' | 'contacts' | 'completion'>) => {
        const newCampaign: Campaign = {
            id: campaigns.length + 1,
            ...newCampaignData,
            status: 'Paused',
            contacts: 0,
            completion: 0,
        };
        setCampaigns(prev => [newCampaign, ...prev]);
    };

  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Campaigns</h1>
            <Button onClick={() => setIsModalOpen(true)}>Create Campaign</Button>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="flex flex-col">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{campaign.name}</h3>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                campaign.status === 'Active' ? 'bg-green-900 text-green-300' :
                campaign.status === 'Paused' ? 'bg-yellow-900 text-yellow-300' :
                'bg-gray-700 text-gray-300'
              }`}>{campaign.status}</span>
            </div>
            <p className="text-sm text-dark-text-secondary mt-2 flex-grow">{campaign.script.substring(0, 100)}...</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-dark-text-secondary">
                <span>Completion</span>
                <span>{campaign.completion}%</span>
              </div>
              <div className="w-full bg-dark-bg rounded-full h-2 mt-1">
                <div className="bg-brand-primary h-2 rounded-full" style={{ width: `${campaign.completion}%` }}></div>
              </div>
              <p className="text-sm text-dark-text-secondary mt-2">{campaign.contacts} contacts</p>
            </div>
          </Card>
        ))}
      </div>
      <CampaignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveCampaign} />
    </div>
  );
};

export default Campaigns;
