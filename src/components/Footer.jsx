import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content flex-between">
        <div className="footer-brand">
          <h1 className="huge-logo">onlySplit</h1>
          <p className="text-secondary">Splitting expenses, beautifully.</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="mailto:support@onlysplit.com">support@onlysplit.com</a>
            <a href="tel:+18005551234">+1 (800) 555-1234</a>
            <a href="#">Help Center</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom text-secondary">
        <p>&copy; 2026 onlySplit Inc. All rights reserved.</p>
      </div>

      <style>{`
        .footer-container {
          background-color: var(--color-surface-container-lowest);
          border-top: 1px solid var(--color-outline-variant);
          padding: 60px 40px 24px;
          margin-top: 60px;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .footer-content {
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 40px;
        }

        .huge-logo {
          font-family: var(--font-fancy);
          font-size: 64px;
          line-height: 1;
          color: var(--color-primary);
          background: linear-gradient(135deg, var(--color-primary), var(--color-surface-tint));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .footer-links-grid {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-column h4 {
          font-size: 16px;
          margin-bottom: 8px;
          color: var(--color-on-surface);
        }

        .footer-column a {
          color: var(--color-on-surface-variant);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-column a:hover {
          color: var(--color-primary);
        }

        .footer-bottom {
          text-align: center;
          font-size: 14px;
          padding-top: 24px;
          border-top: 1px solid var(--color-outline-variant);
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 40px 20px 20px;
          }
          .huge-logo {
            font-size: 48px;
          }
          .footer-links-grid {
            gap: 40px;
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
