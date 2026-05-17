import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddExpense() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save and redirect
    navigate('/');
  };

  return (
    <div className="container animate-fade-in" style={{ maxWidth: '600px' }}>
      <header className="stack-lg">
        <h1>Add an Expense</h1>
        <p className="text-secondary">Keep track of your shared costs.</p>
      </header>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="description">Description</label>
            <input 
              type="text" 
              id="description" 
              className="input-field" 
              placeholder="e.g. Dinner at Mario's"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="amount">Amount</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '10px', color: 'var(--color-outline)' }}>$</span>
              <input 
                type="number" 
                id="amount" 
                className="input-field" 
                placeholder="0.00"
                style={{ paddingLeft: '32px', width: '100%' }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="0.01"
                step="0.01"
              />
            </div>
          </div>

          <div className="input-group stack-lg">
            <label className="input-label">Paid by</label>
            <select className="input-field text-secondary" style={{ appearance: 'none' }}>
              <option value="you">You</option>
              <option value="rahul">Rahul</option>
              <option value="simran">Simran</option>
            </select>
          </div>
          
          <div className="input-group stack-lg">
            <label className="input-label">Split Method</label>
            <div className="split-options">
              <button type="button" className="split-btn active">Equally</button>
              <button type="button" className="split-btn">Unequally</button>
              <button type="button" className="split-btn">By %</button>
            </div>
          </div>

          <div className="flex-between" style={{ marginTop: '32px' }}>
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save Expense</button>
          </div>
        </form>
      </div>

      <style>{`
        .split-options {
          display: flex;
          gap: 8px;
        }
        .split-btn {
          flex: 1;
          padding: 12px;
          background-color: var(--color-surface-container);
          border: 1px solid var(--color-outline-variant);
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-on-surface-variant);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .split-btn:hover {
          background-color: var(--color-surface-container-high);
        }
        .split-btn.active {
          background-color: var(--color-primary-container);
          color: var(--color-on-primary-container);
          border-color: var(--color-primary);
        }
      `}</style>
    </div>
  );
}
