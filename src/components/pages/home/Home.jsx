import React from "react";
import {LeftPanel,CreateFeed,RightPanel} from '../../index'

const Home = () => {
  return (
    <>
      <div className="w-full h-full bg-[#1f1e1e]">
        <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-center gap-3 p-9 max-md:flex-col max-md:items-center">
          <LeftPanel />
          <CreateFeed/>
          <RightPanel/>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
