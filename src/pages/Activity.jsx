import React from 'react';
import { Activity as ActivityIcon, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Activity() {
  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
      <header className="stack-lg">
        <h1 className="stack-sm">Activity</h1>
        <p className="text-secondary">Recent activity across all your groups.</p>
      </header>

      <div className="activity-list">
        <div className="card activity-item stack-sm flex-between">
          <div className="activity-left">
            <div className="activity-icon bg-success">
              <CheckCircle2 size={20} color="var(--color-primary)" />
            </div>
            <div>
              <p><strong>Rahul</strong> paid you <strong>$45.00</strong> in <strong>Goa Trip 2026</strong></p>
              <p className="text-secondary" style={{ fontSize: '12px' }}>2 hours ago</p>
            </div>
          </div>
        </div>

        <div className="card activity-item stack-sm flex-between">
          <div className="activity-left">
            <div className="activity-icon bg-warning">
              <AlertCircle size={20} color="var(--color-danger)" />
            </div>
            <div>
              <p>You owe <strong>$15.00</strong> for <strong>Coffee</strong></p>
              <p className="text-secondary" style={{ fontSize: '12px' }}>Yesterday</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .activity-item {
          padding: 20px;
          transition: transform 0.2s ease;
        }
        .activity-item:hover {
          transform: translateX(4px);
        }
        .activity-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg-success {
          background-color: rgba(5, 150, 105, 0.1);
        }
        .bg-warning {
          background-color: rgba(239, 68, 68, 0.1);
        }
      `}</style>
    </div>
  );
}
