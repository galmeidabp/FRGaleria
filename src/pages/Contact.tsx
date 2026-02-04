import { ContactForm } from "../components/ContactForm";
import { MainTitle } from "../components/details/MainTitle";

export function Contact() {
  return (
    <>
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <MainTitle title="Nos Contate" />
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.3fr] gap-8">
          <div className="border-2 order-2 mt-10 border-green-900 rounded-md p-10 md:mt-0 md:order-1">
            <h3>Assine nossa Newsletter</h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}