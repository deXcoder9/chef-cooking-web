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

  useEffect(() => {
    fetch("recipes.json")
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const handleWantToCOok = (id, name, time, calory) => {
    const isExist = bookmark.find((item) => item.id == id);
    if (!isExist) {
      setBookmark([...bookmark, { id: id, name: name, time: time, calory: calory },]);
      setCookTime(cookTime + 1)
      // console.log(name, id, calories)
    } else {
      toast.error("Can't add same iteam twice 🐸");
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between'>
        <Cards handleWantToCOok={handleWantToCOok} cards={cards}></Cards>
        <Sidebars bookmark={bookmark} cookTime={cookTime}   ></Sidebars>
      </div >
    </>
  )
}

export default App

//? handle the want to cook  and display it in the book mark