import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useDeferredValue } from "react";
import { PageLoader } from "../loaders/PageLoader";

export function MainLayout() {
  const location = useLocation();
  const deferredPath = useDeferredValue(location.pathname);

  const loading = deferredPath !== location.pathname;

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <PageLoader />}

      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <a
        href="https://wa.me/5581997704302?text=Olá!%20Vim%20pelo%20site"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <img src="whatsappicon.svg" alt="Ícone do WhatsApp" />
      </a>

      <Footer />
    </div>
  )
}