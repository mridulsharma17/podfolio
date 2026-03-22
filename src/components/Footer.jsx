import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Mridul Sharma. All rights reserved.
        </p>
        <p className="credit">
          Designed & Built with <span className="heart">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
