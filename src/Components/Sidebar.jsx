

const Sidebar = ({ bookmark, idx }) => {
    // let num = 1;
    console.log(bookmark)
    const { name, time, calory } = bookmark
    return (
        <tr>
            <td className="">{idx + 1}.  {name} </td>
            <td>{time}</td>
            <td className="">{calory} </td>
            <td className=""> <button className="btn btn-primary">Preparing</button> </td>
        </tr>
    );
};

export default Sidebar;