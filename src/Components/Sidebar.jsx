


const Sidebar = ({ bookmark, idx, handleCurrentlyCooking }) => {
    // let num = 1;
    // console.log(bookmark)


    const { name, time, calory, id } = bookmark
    return (
        <tr>
            <td className="">{idx + 1}.  {name} </td>
            <td>{time}</td>
            <td className="">{calory} calories</td>
            <td className="">  <button onClick={() => handleCurrentlyCooking(name, time, calory, id)} className="btn btn-primary">Preparing</button> </td>
        </tr>
    );
};

export default Sidebar;