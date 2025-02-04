const Footer = () => {
    return (
      <footer className="w-full animate-background-pulse text-black py-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-8">
          
          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="flex items-center space-x-3">
              <img src="src/assets/img/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:translate-y-1 transition-transform duration-300" />
              <h3 className="font-bold">Desenvolvedores:</h3>
            </div>
            <ul className="text-sm space-y-2">
              <li><a href="https://www.linkedin.com/in/eduarda-valmor/" target="_blank" className="hover:text-blue-500 transition duration-300">Eduarda Valmor</a></li>
              <li><a href="https://www.linkedin.com/in/felix-augusto" target="_blank" className="hover:text-blue-500 transition duration-300">Felix Oliveira</a></li>
              <li><a href="https://www.linkedin.com/in/lyncoln-campello" target="_blank" className="hover:text-blue-500 transition duration-300">Lyncoln Campello</a></li>
              <li><a href="https://www.linkedin.com/in/mozart-cuman-albuquerque" target="_blank" className="hover:text-blue-500 transition duration-300">Mozart Cuman</a></li>
              <li><a href="https://www.linkedin.com/in/sandy-machado-" target="_blank" className="hover:text-blue-500 transition duration-300">Sandy Machado</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="src/assets/img/IconeRiderX.svg" alt="Ícone RiderX" className="w-20 h-15 transform hover:-translate-y-5 transition duration-500 link-underline"/>
            <p className="text-sm">© 2025 All Rights Reserved</p>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;
  