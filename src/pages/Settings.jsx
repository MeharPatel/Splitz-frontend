import React from 'react';
import { Bell, Shield, CreditCard, HelpCircle, ChevronRight } from 'lucide-react';

export default function Settings() {
  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
      <header className="stack-lg">
        <h1 className="stack-sm">Settings</h1>
        <p className="text-secondary">Configure onlySplit to work for you.</p>
      </header>

      <div className="settings-section stack-lg">
        <h3 className="stack-md">App Preferences</h3>
        <div className="card">
          <div className="setting-item flex-between">
            <div className="setting-info">
              <Bell size={20} className="text-secondary" />
              <span>Push Notifications</span>
            </div>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
          <hr className="divider" />
          <div className="setting-item flex-between">
            <div className="setting-info">
              <CreditCard size={20} className="text-secondary" />
              <span>Payment Methods</span>
            </div>
            <ChevronRight size={20} className="text-secondary" />
          </div>
        </div>
      </div>

      <div className="settings-section stack-lg">
        <h3 className="stack-md">Security & Help</h3>
        <div className="card">
          <div className="setting-item flex-between">
            <div className="setting-info">
              <Shield size={20} className="text-secondary" />
              <span>Privacy & Security</span>
            </div>
            <ChevronRight size={20} className="text-secondary" />
          </div>
          <hr className="divider" />
          <div className="setting-item flex-between">
            <div className="setting-info">
              <HelpCircle size={20} className="text-secondary" />
              <span>Help Center</span>
            </div>
            <ChevronRight size={20} className="text-secondary" />
          </div>
        </div>
      </div>

      <style>{`
        .setting-item {
          padding: 16px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .setting-item:hover {
          background-color: var(--color-surface-container);
        }
        .setting-info {
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 500;
        }
        .divider {
          border: none;
          border-top: 1px solid var(--color-outline-variant);
          margin: 0;
        }
        .toggle {
          width: 40px;
          height: 24px;
          appearance: none;
          background-color: var(--color-primary);
          border-radius: 12px;
          position: relative;
          cursor: pointer;
        }
        .toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          right: 2px;
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
}
