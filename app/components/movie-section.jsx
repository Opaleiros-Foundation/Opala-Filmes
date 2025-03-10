import {Card} from "@/app/components/Card";
import Link from "next/link";

export const MovieSection = ({cardsData, tittle}) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold tracking-tight text-balance text-white-200 sm:text-4xl text-center">{tittle}</h1>
            <div className="flex flex-wrap justify-center">
                {cardsData.length === 0 && (
                    <h1 className="text-2xl font-semibold tracking-tight text-balance text-white-200 sm:text-4xl text-center">
                        Sem filmes
                    </h1>
                )}
                {cardsData.map(card => (
                    <Link href={`/${card.uuid}`} key={card.uuid}>
                        <Card
                            key={card.uuid}
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