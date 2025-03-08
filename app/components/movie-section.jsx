import {Card} from "@/app/components/Card";
import Link from "next/link";

export const MovieSection = ({cardsData, tittle}) => {
  return (
      <div>
          <h1 className="text-2xl font-semibold tracking-tight text-balance text-white-200 sm:text-4xl text-center">{tittle}</h1>
          <div className="flex flex-wrap justify-center">
              {cardsData.map(card => (
                 <Link href={`/${card.id}`} key={card.id}>
                     <Card
                         key={card.id}
                         image={card.image}
                         title={card.title}
                         description={card.description}
                         rating={card.rating}
                     />
                 </Link>
              ))}
          </div>
      </div>
  );
}