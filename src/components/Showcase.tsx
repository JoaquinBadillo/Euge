import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Showcase({ data, title }) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
 
  return (
    <div className="w-full h-full py-20">
      <h1 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
       { title }
      </h1>
      <Carousel items={cards} />
    </div>
  );
}


