'use client'; // Indique à Next.js que ce composant doit être traité côté client

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  // State pour ouvrir/fermer la modale
  const [isModalOpen, setModalOpen] = useState(false);

  // Fonction pour ouvrir la modale
  const openModal = (e) => {
    e.preventDefault(); // Empêche la redirection vers la page de contact
    setModalOpen(true); // Ouvre la modale
  };

  // Fonction pour fermer la modale
  const closeModal = () => setModalOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <img src="/Logo/logo.png" alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="header_title">
        <h1>GameStore</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/shop">Boutique</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            {/* Modifie ce lien pour appeler openModal à la place */}
            <a href="#" onClick={openModal}>Contact</a> {/* Utilisation de <a> pour éviter les conflits */}
          </li>          
        </ul>
      </nav>

      {/* Modale de contact */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>X</button>
            <h2>Formulaire de Contact</h2>
            <form>
              <label htmlFor="name">Nom:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
