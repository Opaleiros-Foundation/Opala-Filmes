import { Card } from "@/app/components/Card";
import Link from "next/link";
import './movie-section/styles.css';

export const MovieSection = ({ cardsData, tittle }) => {
    return (
        <section className="movie-section">
            {/* Elementos decorativos */}
            <div className="floating-decoration floating-decoration-left decoration-glow">
                🎬
            </div>
            <div className="floating-decoration floating-decoration-right decoration-glow">
                🎥
            </div>

            <h1 className="movie-section-title">{tittle}</h1>
            <div className="movies-grid">
                {cardsData.length === 0 ? (
                    <div className="empty-message">
                        Sem filmes
                    </div>
                ) : (
                    cardsData.map(card => (
                        <Link 
                            href={`/${card.uuid}`} 
                            key={card.uuid}
                            className="movie-link"
                        >
                            <Card
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                rating={card.rating}
                            />
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
}