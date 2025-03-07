import Image from "next/image";

// pages/index.js
import {Card} from './components/Card';

export default function Home() {
    const cardsData = [
        {
            id: 1,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Card Title 1',
            description: 'This is a brief description of the first card.',
            rating: 4,
        },
        {
            id: 2,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Card Title 2',
            description: 'This is a brief description of the second card.',
            rating: 5,
        },
        {
            id: 3,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Card Title 3',
            description: 'This is a brief description of the third card.',
            rating: 3,
        },
        // Add more card objects as needed
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {cardsData.map(card => (
                <Card
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    rating={card.rating}
                />
            ))}
        </div>
    );
}