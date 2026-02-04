import { MainTitle } from "../components/details/MainTitle";

export function Info() {
  return (
    <>
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <MainTitle title="Sobre nós" />

        <div className="grid grid-cols-1 gap-10 text-sm text-brown-900 font-inter md:text-md md:grid-cols-2">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor aut, libero ipsam fuga eum, consectetur quisquam similique illum pariatur qui unde doloribus ducimus officia esse excepturi adipisci placeat odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae saepe soluta natus delectus vel vero. Tenetur illum facere debitis minima enim eligendi, quia quisquam ullam consectetur, corporis rem magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas vel error necessitatibus sed dicta explicabo cumque. Quam esse doloremque mollitia voluptas iure earum distinctio repellat soluta quis. Adipisci, quibusdam?</p>
          <img src="./otogatinho.png" alt="" className="h-80 rounded-md" />
        </div>
      </div>
    </>
  )
}