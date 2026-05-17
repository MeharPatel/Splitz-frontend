import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TripBalances() {
  const { id } = useParams();
  const title = id === 'goa' ? 'Goa Trip 2026' : 'Trip Balances';

  return (
    <div className="container animate-fade-in">
      <header className="flex-between stack-lg header-wrap">
        <div>
          <p className="text-secondary stack-sm">Settlement View</p>
          <h1>{title} Balances</h1>
        </div>
        <div className="header-actions">
          <Link to={`/trip/${id}/expenses`} className="btn btn-secondary">View Expenses</Link>
          <button className="btn btn-primary btn-pill">Settle Up</button>
        </div>
      </header>

      <section className="stack-lg">
        <h3 className="stack-md">Your Balances</h3>
        <div className="card balance-item flex-between stack-sm">
          <div className="user-info">
            <div className="avatar">R</div>
            <span>You owe <strong>Rahul</strong></span>
          </div>
          <div className="amount-action">
            <h4 className="text-mono" style={{ color: 'var(--color-danger)' }}>$45.00</h4>
            <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Pay</button>
          </div>
        </div>
        <div className="card balance-item flex-between stack-sm">
          <div className="user-info">
            <div className="avatar">S</div>
            <span><strong>Simran</strong> owes you</span>
          </div>
          <div className="amount-action">
            <h4 className="text-mono" style={{ color: 'var(--color-primary)' }}>$225.00</h4>
            <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Remind</button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="stack-md">Other Balances</h3>
        <div className="card balance-item flex-between stack-sm">
          <div className="user-info">
            <div className="avatar">A</div>
            <span>Amit owes Rahul</span>
          </div>
          <div className="amount-action">
            <h4 className="text-mono text-secondary">$30.00</h4>
          </div>
        </div>
      </section>

      <style>{`
        .header-wrap {
          flex-wrap: wrap;
          gap: 16px;
        }
        .balance-item {
          padding: 16px;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--color-surface-container-high);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: var(--color-on-surface);
        }
        .amount-action {
          display: flex;
          align-items: center;
          gap: 16px;
        }
      `}</style>
    </div>
  );
}
