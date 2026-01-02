const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="text-center py-4 bg-gray-900 text-white">
        © {currentYear} Richard Sawanaka. All rights reserved.
      </footer>
    );
  };
  
  export default Footer;
  