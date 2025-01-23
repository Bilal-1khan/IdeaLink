import React from "react";
import InvestorsCard from "./InvestorsCard";
import { InvestorCard } from "../..";

const InvestorContent = () => {
  return (
    <>
      {
        InvestorCard.map((card)=>(
          <InvestorsCard
            key={card.id}
            BgImg={card.BGImg}
            Name={card.InvesterName}
            profile={card.profile}
            headLine={card.headLine}
            id={card.id}
          />
        ))
      }
    </>
  );
};

export default InvestorContent;
