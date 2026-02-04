interface TitleProps {
  title: string;
}

export function MainTitle({title}: TitleProps) {
  return (
    <>
      <h2 className="font-italianno text-6xl text-brown-900 underline-gold mb-8">{title}</h2>
    </>
  )
}