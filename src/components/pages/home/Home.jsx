import React from "react";
import {LeftPanel,CreateFeed,RightPanel,Container} from '../../index'

const Home = () => {
  return (
    <>
    <Container>    
        <div className="flex justify-center gap-3 p-9 max-md:flex-col max-md:items-center">
          <LeftPanel />
          <CreateFeed/>
          <RightPanel/>
        </div>
      </Container>
    </>
  );
};

export default Home;
