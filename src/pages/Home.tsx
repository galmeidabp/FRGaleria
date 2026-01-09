import { Art } from "../components/Art";
import { Carousel } from "../components/Carousel";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Art />
      <Footer />
    </>
  )
}