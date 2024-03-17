import CurrentCook from "./CurrentCook";
import Sidebar from "./Sidebar";


const Sidebars = ({ bookmark, cookTime, handleCurrentlyCooking, CurrentlyCooking, total, CompCookTime }) => {
    // console.log(bookmark)
    return (
        <div className="flex flex-col items-center mx-auto w-[560px] py-7 border-2 border-gray-500 rounded-2xl  text-[#dfe0ecd8] ">
            <h2 className="mb-5 mt-3 text-white font-extrabold text-2xl ">Want to Cook: {cookTime} </h2> <br />
            <div className="" >
                <table className="w-[500px] text-left mb-10 ">
                    <thead >
                        <tr className="pb-3 text-white text-[18px]">
                            <th className="w-36">Name</th>
                            <th>Time</th>
                            <th >Caloris</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookmark.map((bm, idx) => <Sidebar key={idx} idx={idx} handleCurrentlyCooking={handleCurrentlyCooking} bookmark={bm}  ></Sidebar>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto">
                <h2 className="text-white font-extrabold text-2xl text-center">Currently Cooking: {CompCookTime} </h2>
                <table className="w-[500px] text-left  ">
                    <thead className="" >
                        <tr className="py-7 text-white text-[18px]">
                            <th className="flex-1">Name</th>
                            <th>Time</th>
                            <th >Caloris</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            CurrentlyCooking.map((cc, idx) => <CurrentCook key={idx} idx={idx} CurrentlyCooking={cc} total={total} ></CurrentCook>)
                        }
                        <tr>
                            <td className="bg-transparent"></td>
                            <td className="mr-3 font-bold text-white text-[18px]">Total Time = {total.time}</td>
                            <td className="mr-3 font-bold text-white text-[18px]">Total Calories = {total.calory}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Sidebars;