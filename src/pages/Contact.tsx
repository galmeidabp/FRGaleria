import { ContactForm } from "../components/ContactForm";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export function Contact() {
  return (
    <>
      <Header />
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <h2 className="font-italianno text-6xl text-gradient-gold mb-10">Nos Contate</h2>
        <div className="grid grid-cols-[1fr_2fr] gap-8">
          <div className="border-2 border-green-900 rounded-md p-10">
            <h3>Assine nossa Newsletter</h3>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  )
}