const Card = ({ cards, handleWantToCOok }) => {
    const { recipe_name, preparing_time, calories, recipe_id } = cards
    return (

        <div className="w-[350px] h-fit text-left p-3 border-2 border-gray-500 rounded-2xl space-y-3 text-[#dfe0ecd8]">
            <img className="rounded-2xl h-[180px] w-full"
                src={cards.recipe_image} />
            <h3 className="text-white font-extrabold pt-2"> {recipe_name} </h3>
            <p>{cards.short_description}</p>
            <h5>Ingredients : {cards.ingredients.length}</h5>
            <ul className="list-disc pl-7">
                {
                    cards.ingredients.map((item, idx) => <li key={idx}> {item} </li>)
                }
            </ul>
            <hr />
            <div className="flex justify-between">
                <p><i className="fa-regular fa-clock"></i> {preparing_time} minutes</p>
                <p className="mr-8"><i className="fa-solid fa-fire-flame-curved"></i> {calories} calories </p>
            </div>
            <button onClick={() => handleWantToCOok(recipe_id, recipe_name, preparing_time, calories)} className="btn btn-primary">Want to cook</button>
        </div>



    );
};

export default Card;