import React, { useState } from 'react';
import { Users, ChevronRight, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Groups() {
  const [groups, setGroups] = useState([
    { id: 'goa', name: 'Goa Trip 2026', icon: '🏖️', subtitle: 'You owe $45.00' },
    { id: 'weekend', name: 'Weekend Dinner', icon: '🍕', subtitle: 'Settled up' }
  ]);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [groupName, setGroupName] = useState('');
  const [groupIcon, setGroupIcon] = useState('✈️');
  const [members, setMembers] = useState('');

  const handleCreateGroup = (e) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    const newGroup = {
      id: groupName.toLowerCase().replace(/\\s+/g, '-'),
      name: groupName,
      icon: groupIcon,
      subtitle: 'Settled up' // default state for new groups
    };

    setGroups([newGroup, ...groups]);
    setShowForm(false);
    setGroupName('');
    setMembers('');
  };

  return (
    <div className="container animate-fade-in">
      <header className="flex-between stack-lg">
        <div>
          <h1 className="stack-sm">Groups</h1>
          <p className="text-secondary">Manage your trips and shared expenses.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          <Plus size={18} /> New Group
        </button>
      </header>

      {showForm && (
        <div className="card form-card stack-lg animate-fade-in">
          <div className="flex-between stack-md">
            <h3>Create a New Group</h3>
            <button className="icon-btn" onClick={() => setShowForm(false)}><X size={20} /></button>
          </div>
          <form onSubmit={handleCreateGroup}>
            <div className="form-grid">
              <div className="input-group">
                <label className="input-label">Emoji Icon</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={groupIcon}
                  onChange={(e) => setGroupIcon(e.target.value)}
                  maxLength={2}
                  style={{ width: '80px', textAlign: 'center', fontSize: '20px' }}
                />
              </div>
              <div className="input-group" style={{ flex: 1 }}>
                <label className="input-label">Group Name</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. Ski Trip 2026"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="input-group stack-lg">
              <label className="input-label">Add Members (Emails or Names)</label>
              <textarea 
                className="input-field" 
                placeholder="simran@example.com, rahul"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                style={{ height: '80px', paddingTop: '12px', resize: 'vertical' }}
              />
              <p className="text-secondary" style={{ fontSize: '12px', marginTop: '4px' }}>
                Separate multiple names or emails with commas.
              </p>
            </div>
            
            <div className="flex-end">
              <button type="submit" className="btn btn-primary">Create Group</button>
            </div>
          </form>
        </div>
      )}

      <section className="groups-list stack-lg">
        {groups.map((group) => (
          <Link key={group.id} to={`/trip/${group.id}/expenses`} className="card group-card flex-between">
            <div className="group-info">
              <div className="group-icon">{group.icon}</div>
              <div>
                <h3 className="stack-sm">{group.name}</h3>
                <p className="text-secondary">{group.subtitle}</p>
              </div>
            </div>
            <ChevronRight color="var(--color-outline)" />
          </Link>
        ))}
      </section>

      <style>{`
        .groups-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .group-card {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .group-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
        .group-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .group-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--color-surface-container);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }
        .form-card {
          border: 1px solid var(--color-primary);
          background-color: var(--color-surface-container-low);
          margin-bottom: 32px;
        }
        .form-grid {
          display: flex;
          gap: 16px;
        }
        .flex-end {
          display: flex;
          justify-content: flex-end;
        }
        .icon-btn {
          background: none;
          border: none;
          color: var(--color-on-surface-variant);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        .icon-btn:hover {
          background-color: var(--color-surface-container-highest);
          color: var(--color-danger);
        }
      `}</style>
    </div>
  );
}
