import './currentCook.css'
const CurrentCook = ({ idx, CurrentlyCooking }) => {
    const { calory, name, time } = CurrentlyCooking;
    return (

        <div className='w-full'>
            <tr className='w-[100%]'>
                <td className="">{idx + 1}.  {name} </td>
                <td>{time}</td>
                <td className="">{calory} Calories </td>
            </tr>
        </div >

    );
};

export default CurrentCook;

