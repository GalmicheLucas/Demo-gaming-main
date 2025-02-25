"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { FaFileExcel } from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Bannière */}
      <header className="text-center py-16 bg-gray-700">
        <h2 className="text-3xl font-bold">GameStore</h2>
        <p className="mt-4">Le meilleur du gaming et de pop culture !</p>
      </header>

      {/* Carrousel d'images */}
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="carousel-swiper"
          >
            <SwiperSlide>
              <Image
                src="/carrousel/meilleursjeuxswitch.webp"
                alt="switch"
                width={800}
                height={400}
                className="carousel-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/carrousel/sans_titre_6.webp"
                alt="Manga"
                width={800}
                height={400}
                className="carousel-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/carrousel/Sans titre.png"
                alt="PS4 Collector"
                width={800}
                height={400}
                className="carousel-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Produits en vedette */}
      
      <section className="Accueil flex flex-col items-center text-center">
  <div className="w-full">
    <h2 className="text-3xl font-bold">Découvrez les meilleurs jeux et objets de collection !</h2>
    <p className="mt-4">Figurines, éditions limitées et consoles rétro en stock.</p>
  </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <Image
            src="/Jeux/zelda-collector.jpg"
            alt="Jeu 1"
            width={200}
            height={200}
            className="rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">
             Jeux et Jeux Collector 
          </h3>
          
        </div>
       
        <div className="bg-gray-800 p-4 rounded-lg">
          <Image
            src="/Jeux/ps4-collector.jpg"
            alt="Jeu 3"
            width={200}
            height={200}
            className="rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">Consoles et Consoles Collector</h3>
          
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <Image
            src="/Jeux/astro-bot-dualsense-unboxing4.jpeg"
            alt="Jeu 3"
            width={220}
            height={200}
            className="rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">
            Manette collector Astro Bot PS5
          </h3>
        
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <Image
            src="/Jeux/crochet.jpg"
            alt="Jeu 3"
            width={230}
            height={200}
            className="rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">
            De la Pop Culture (Disney etc)
          </h3>
          
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <Image
            src="/Jeux/mario-kart.jpg"
            alt="Jeu 2"
            width={200}
            height={200}
            className="rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">Figurine Mario Kart</h3>
          
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <Image
            src="/Jeux/luffy.jpg"
            alt="Jeu 3"
            width={200}
            height={200}
            className="rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">Animé</h3>
          
        </div>
         {/* Ajoute mx-auto pour centrer */}
         <div className="mt-6">
  <Link href="/shop" className="boutique-link">
    Voir toute la boutique
  </Link>
</div>



      </section>

      <section className="contact-form__section">
        <h2 className="contact-form__title">Contactez-nous</h2>
        {submitted ? (
          <p className="contact-form__success-message">
            Merci pour votre message ! Nous vous répondrons bientôt.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form__form">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-form__input"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-form__input"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-form__textarea"
            ></textarea>
            <button type="submit" className="contact-form__button">
              Envoyer
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
