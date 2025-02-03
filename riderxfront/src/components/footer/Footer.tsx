const Footer = () => {
    return (
        <footer className="w-full bg-[#81A3A7] text-black py-6">
            <div className="w-full flex justify-between items-center px-6">
                
                <div className="flex items-center space-x-3">
                    <img src="src/assets/img/IconeRiderX.svg" alt="Ícone RiderX" className="w-20 h-15" />
                    <p className="text-sm">© 2025 All Rights Reserved</p>
                </div>
                  
                <div className="flex items-start space-x-3 text-right">
                    <img src="src/assets/img/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-1" />
                    <div>
                        <h3 className="font-bold">Desenvolvedores:</h3>
                        <ul className="text-sm">
                            <li><a href="https://www.linkedin.com/in/eduarda-valmor/" target="_blank" className="hover:underline">Eduarda Valmor</a></li>
                            <li><a href="https://www.linkedin.com/in/felix-augusto" target="_blank" className="hover:underline">Felix Oliveira</a></li>
                            <li><a href="https://www.linkedin.com/in/lyncoln-campello" target="_blank" className="hover:underline">Lyncoln Campello</a></li>
                            <li><a href="https://www.linkedin.com/in/mozart-cuman-albuquerque" target="_blank" className="hover:underline">Mozart Cuman</a></li>
                            <li><a href="https://www.linkedin.com/in/sandy-machado-" target="_blank" className="hover:underline">Sandy Machado</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
