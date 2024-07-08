import Card from "./Card";

const Cards = ({ cards, handleWantToCOok }) => {

    return (
        <div className="grid  lg:grid-cols-2 gap-5 place-items-center lg:place-items-start ">
            {
                cards.map((card, idx) => <Card key={idx} handleWantToCOok={handleWantToCOok} cards={card} ></Card>)
            }
        </div>
    );
};

export default Cards;