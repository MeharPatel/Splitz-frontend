import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Receipt, User } from 'lucide-react';

export default function TripExpenses() {
  const { id } = useParams();
  const title = id === 'goa' ? 'Goa Trip 2026' : 'Trip Expenses';

  return (
    <div className="container animate-fade-in">
      <header className="flex-between stack-lg header-wrap">
        <div>
          <p className="text-secondary stack-sm">Trip Ledger</p>
          <h1>{title}</h1>
        </div>
        <div className="header-actions">
          <Link to={`/trip/${id}/balances`} className="btn btn-secondary">View Balances</Link>
          <Link to="/add-expense" className="btn btn-primary">
            <Plus size={18} /> Add Expense
          </Link>
        </div>
      </header>

      <div className="expenses-list">
        <div className="date-header text-secondary stack-sm">Today</div>
        <div className="card expense-row flex-between stack-md">
          <div className="expense-left">
            <div className="expense-icon"><Receipt size={20} color="var(--color-on-surface-variant)" /></div>
            <div>
              <h4 className="stack-sm">Flight Tickets</h4>
              <p className="text-secondary" style={{ fontSize: '14px' }}>Paid by <strong>You</strong></p>
            </div>
          </div>
          <div className="expense-right">
            <h4 className="text-mono">$450.00</h4>
            <span className="badge badge-positive">You lent $225</span>
          </div>
        </div>

        <div className="date-header text-secondary stack-sm">Yesterday</div>
        <div className="card expense-row flex-between stack-md">
          <div className="expense-left">
            <div className="expense-icon"><Receipt size={20} color="var(--color-on-surface-variant)" /></div>
            <div>
              <h4 className="stack-sm">Dinner at Curlies</h4>
              <p className="text-secondary" style={{ fontSize: '14px' }}>Paid by <strong>Rahul</strong></p>
            </div>
          </div>
          <div className="expense-right">
            <h4 className="text-mono">$90.00</h4>
            <span className="badge badge-negative">You borrowed $45</span>
          </div>
        </div>
      </div>

      <style>{`
        .header-wrap {
          flex-wrap: wrap;
          gap: 16px;
        }
        .header-actions {
          display: flex;
          gap: 12px;
        }
        .date-header {
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 24px;
        }
        .expense-row {
          padding: 16px;
        }
        .expense-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .expense-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background-color: var(--color-surface-container);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .expense-right {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
