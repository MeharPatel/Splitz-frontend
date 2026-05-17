import React from 'react';
import { ArrowUpRight, ArrowDownRight, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container animate-fade-in">
      <header className="flex-between stack-lg">
        <div>
          <h1 className="stack-sm">Dashboard</h1>
          <p className="text-secondary">Welcome back! Here's your financial overview.</p>
        </div>
      </header>

      <section className="balances-grid stack-lg">
        <div className="card balance-card">
          <p className="text-secondary stack-sm">Total Balance</p>
          <h2 className="text-mono" style={{ color: 'var(--color-primary)' }}>+ $142.50</h2>
        </div>
        <div className="card balance-card">
          <p className="text-secondary stack-sm">You Owe</p>
          <h2 className="text-mono" style={{ color: 'var(--color-danger)' }}>- $45.00</h2>
        </div>
        <div className="card balance-card">
          <p className="text-secondary stack-sm">You are Owed</p>
          <h2 className="text-mono" style={{ color: 'var(--color-primary)' }}>+ $187.50</h2>
        </div>
      </section>

      <section className="stack-lg">
        <div className="flex-between stack-md">
          <h3>Active Trips & Groups</h3>
          <button className="btn btn-secondary btn-pill">View All</button>
        </div>
        <div className="groups-list">
          <Link to="/trip/goa/expenses" className="card group-card flex-between">
            <div className="group-info">
              <div className="group-icon">🏖️</div>
              <div>
                <h4 className="stack-sm">Goa Trip 2026</h4>
                <p className="text-secondary" style={{ fontSize: '14px' }}>You owe $45.00</p>
              </div>
            </div>
            <ChevronRight color="var(--color-outline)" />
          </Link>
          <Link to="/trip/weekend/expenses" className="card group-card flex-between">
            <div className="group-info">
              <div className="group-icon">🍕</div>
              <div>
                <h4 className="stack-sm">Weekend Dinner</h4>
                <p className="text-secondary" style={{ fontSize: '14px' }}>Settled up</p>
              </div>
            </div>
            <ChevronRight color="var(--color-outline)" />
          </Link>
        </div>
      </section>

      <style>{`
        .balances-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-gutter);
        }
        .balance-card {
          padding: 24px;
        }
        .groups-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .group-card {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .group-card:hover {
          border-color: var(--color-primary);
        }
        .group-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .group-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--color-surface-container);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}
