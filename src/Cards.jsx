import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            {
                cards.map((card, idx) => <Card key={idx} cards={card} ></Card>)
            }
        </div>
    );
};

export default Cards;