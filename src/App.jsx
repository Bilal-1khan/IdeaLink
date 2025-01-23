import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShareLayout, Home, PeopleIdea, Investor } from "./components/index";
import { FeedCardContextProvider } from "./context/FeedCardProvider";
import { useState } from "react";

function App() {
  const [Card,setCard] = useState([])

  function addFeed (card){
    setCard((prev)=>([...prev,{id:Date.now(),...card}]))
  }
  function deleteFeed (id){
    setCard((prev)=>(prev.filter((items)=>items.id !== id)))
  }
  function editFeed (){}
  return (
    <>
      <FeedCardContextProvider value={{ Card,addFeed, deleteFeed, editFeed }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShareLayout />}>
              <Route index element={<Home />} />
              <Route path="/people-idea" element={<PeopleIdea />} />
              <Route path="/investor" element={<Investor />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FeedCardContextProvider>
    </>
  );
}

export default App;
