import React from 'react';
import '../styles/footer.css'; // CSS ෆයිල් එක import කරන්න

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Pathum Lakshan. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <p> Design and Develop with ❤️ ( sudu nona ) </p>
    </footer>
  );
}
