import '../styles/globals.scss';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gamestore-Demo',
  description: 'le Royaume du Gaming',
};

export default function RootLayout({ children }) {
  return (  
    <html lang="fr"> 
    <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}