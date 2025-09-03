import './App.css'
import {Card} from "./components/Card.jsx";
import Data from "./dp/data.json"

function App() {
  return (
    <>
        {
            Data.map((card) => {
                return <Card name={card.name} id={card.id} key={card.id} age={card.age} active={card.active} city={card.city} />
            })
        }
    </>
  )
}

export default App
