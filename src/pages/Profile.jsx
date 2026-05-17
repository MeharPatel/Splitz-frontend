import React from 'react';

export default function Profile() {
  return (
    <div className="container animate-fade-in" style={{ maxWidth: '600px' }}>
      <header className="stack-lg">
        <h1>My Profile</h1>
        <p className="text-secondary">Manage your account settings and preferences.</p>
      </header>

      <div className="card stack-md">
        <div className="flex-between" style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="profile-avatar">U</div>
            <div>
              <h3 className="stack-sm">User Account</h3>
              <p className="text-secondary">user@example.com</p>
            </div>
          </div>
          <button className="btn btn-secondary">Edit</button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-outline-variant)', margin: '24px 0' }} />

        <div className="stack-md">
          <h4 className="stack-md">Preferences</h4>
          <div className="flex-between stack-md">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
          </div>
          <div className="flex-between">
            <span>Default Currency</span>
            <select className="input-field" style={{ width: '120px', height: '36px' }}>
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>INR (₹)</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="stack-lg" style={{ textAlign: 'center', marginTop: '32px' }}>
        <button className="btn" style={{ color: 'var(--color-danger)' }}>Log Out</button>
      </div>

      <style>{`
        .profile-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--color-primary-container);
          color: var(--color-on-primary-container);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
