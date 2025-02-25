import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800 text-white mt-8">
            {/* Logo tout à gauche */}
            <div className="mb-4 md:mb-0">
                <Link href="/">
                    <Image src="/Logo/logo.png" alt="Logo" width={50} height={50} />
                </Link>
            </div>

            {/* Texte au centre */}
            <div className="text-center md:text-left">
                <p>&copy; 2025 GameStore. Tous droits réservés.</p>
                <p className="text-sm">Mentions légales | Politique de confidentialité | Conditions d'utilisation</p>
            </div>

            {/* Liens sociaux à droite */}
            <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
            </div>

             {/* Moyens de paiement */}
             <div className="mt-4 md:mt-0 flex space-x-4">
                <Image src="/icons/visa.png" alt="Visa" width={50} height={30} />
                <Image src="/icons/paypal.png" alt="PayPal" width={50} height={50} />
            </div>

            {/* Informations supplémentaires */}
            <div className="mt-4 md:mt-0 text-center">
                <p>Contactez-nous : contact@gamestore.com</p>
                <p>Support client : +33 1 23 45 67 89</p>
            </div>
        </footer>
    );
};

export default Footer;
