import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full   mt-48 bg-black">
      <div className="text-white text-center p-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Address */}
        <p className="mt-4">123 Main Street, Cityville</p>

        {/* Email */}
        <p>Email: info@rifqicosmetic.com</p>

        {/* Copyright */}
        <p className="mt-4">Rifqi Cosmetic, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
