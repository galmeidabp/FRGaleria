import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export function About() {
  return (
    <>
      <Header />
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <h2 className="font-italianno text-6xl text-gradient-gold mb-10">Sobre nós</h2>

        <div className="grid grid-cols-2 gap-10 text-brown-900 font-inter">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor aut, libero ipsam fuga eum, consectetur quisquam similique illum pariatur qui unde doloribus ducimus officia esse excepturi adipisci placeat odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae saepe soluta natus delectus vel vero. Tenetur illum facere debitis minima enim eligendi, quia quisquam ullam consectetur, corporis rem magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas vel error necessitatibus sed dicta explicabo cumque. Quam esse doloremque mollitia voluptas iure earum distinctio repellat soluta quis. Adipisci, quibusdam?</p>
          <img src="./otogatinho.png" alt="" className="h-80 rounded-md" />
        </div>
      </div>
      <Footer />
    </>
  )
}