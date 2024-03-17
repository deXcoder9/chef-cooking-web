import Card from "./Card";

const Cards = ({ cards, handleWantToCOok }) => {

    return (
        <div className="grid grid-cols-2">
            {
                cards.map((card, idx) => <Card key={idx} handleWantToCOok={handleWantToCOok} cards={card} ></Card>)
            }
        </div>
    );
};

export default Cards;