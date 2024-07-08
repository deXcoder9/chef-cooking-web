import './App.css'
import { useEffect, useState } from "react";
import Cards from './Components/Cards'
import Header from './Components/Header'
import Sidebars from './Components/Sidebars';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cards, setCards] = useState([])
  const [bookmark, setBookmark] = useState([])
  const [cookTime, setCookTime] = useState(0)
  const [CompCookTime, setCompCookTime] = useState(0)
  const [CurrentlyCooking, setCurrentlyCooking] = useState([])
  const [total, setTotal] = useState({ time: 0, calory: 0 })


  useEffect(() => {
    fetch("recipes.json")
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const handleWantToCOok = (id, name, time, calory) => {
    const isExist = bookmark.find((i) => i.id === id);
    if (!isExist) {
      setBookmark([...bookmark, { id: id, name: name, time: time, calory: calory },]);
      setCookTime(cookTime + 1)
    } else {
      toast.error("Can't cook same iteam twice 🐸");
    }
  }

  const handleCurrentlyCooking = (name, time, calory, id) => {
    setCompCookTime(CompCookTime + 1)
    setCookTime(cookTime - 1)
    const leftOver = bookmark.filter((item) => item.id !== id);
    setBookmark(leftOver)
    setCurrentlyCooking([...CurrentlyCooking, { id: id, name: name, time: time, calory: calory },])
    setTotal({ time: total.time + time, calory: total.calory + calory })
  }
  return (
    <>
      <div className='max-w-[1380px] mx-auto'>

        <Header></Header>
        <div className='flex  lg:justify-between flex-col lg:flex-row  mt-10 '>
          <Cards handleWantToCOok={handleWantToCOok} cards={cards}></Cards>
          <Sidebars bookmark={bookmark} cookTime={cookTime} CurrentlyCooking={CurrentlyCooking} CompCookTime={CompCookTime} total={total} handleCurrentlyCooking={handleCurrentlyCooking}   ></Sidebars>
        </div >
      </div>
    </>
  )
}

export default App

//? handle the want to cook  and display it in the book mark