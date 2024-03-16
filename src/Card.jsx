const Card = ({ cards }) => {
    // console.log(cards)
    const [recipe_image, calories, preparing_time,] = cards;
    return (

        <div className="w-[331px] p-6 border-2 border-gray-500 rounded-2xl space-y-3 text-[#dfe0ecd8]">
            <img className="rounded-2xl w-full"
                src="https://i.postimg.cc/jdwx0Y71/Whats-App-Image-2024-03-16-at-07-47-47-e628a52f.jpg" alt=""> </img>
            <h3 className="text-white font-extrabold pt-2">Spaghetti Bolognese</h3>
            <p>Classic Italian pasta dish with savory meat sauce.</p>
            <h5>Ingredients : 6</h5>
            <ul className="list-disc pl-7">
                <li>500g sorisha</li>
                <li>1 onion chppped</li>
                <li>2 cloves garlic</li>
            </ul>
            {/* <hr> */}
            <div className="flex justify-between">
                <p><i className="fa-regular fa-clock"></i> 30 minues</p>
                <p className="mr-8"><i className="fa-solid fa-fire-flame-curved"></i> 600 calories</p>
            </div>
            <button className="btn btn-primary">Want to cook</button>
        </div>



    );
};

export default Card;