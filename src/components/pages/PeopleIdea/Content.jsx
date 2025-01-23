import React from 'react'
import PeopleIdeas from "../../JSON Files/PeopleIdea.json"
import {PeopleIdeaCard} from '../../../components'


function Content() {
  return (
    <>
       {
          PeopleIdeas.map((card,ids)=>(
            <PeopleIdeaCard
            key={ids}
            img={card.img}
            name={card.name}
            ideaImg={card.ideaImg}
            idea={card.idea}
            />
          ))
        }
    </>
  )
}

export default Content
