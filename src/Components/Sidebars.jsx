import Sidebar from "./Sidebar";


const Sidebars = ({ bookmark, cookTime }) => {
    // console.log(bookmark)
    return (
        <div className="flex flex-col items-center mx-auto w-[500px] p-6 border-2 border-gray-500 rounded-2xl  text-[#dfe0ecd8] ">
            <h2 className="text-white font-extrabold text-2xl ">Want to Cook: {cookTime} </h2> <br />
            <div >
                <table className="w-[500px] text-left  ">
                    <thead >
                        <tr className="pb-3">
                            <th className="w-36">Name</th>
                            <th>Time</th>
                            <th >Caloris</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookmark.map((bm, idx) => <Sidebar key={idx} idx={idx} bookmark={bm}  ></Sidebar>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Sidebars;