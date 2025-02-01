import React from "react";
import { Content, UserProfile, Container} from "../../../components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const PeopleIdea = () => {
  return (
    <>
    <Container>
          <div className="flex text-white gap-5 justify-center p-6 max-md:flex-col max-md:items-center">
            <div className="sideBar w-[25rem] max-sm:w-full max-md:w-full">
              <UserProfile maxWidth={"100%"} smWidth={"full"} />
              <button className="inline-block bg-white w-full px-4 py-2 text-[#1f1e1e] capitalize font-bold rounded-3xl my-3 max-md:w-full max-md:mx-auto">
                professional help <OpenInNewIcon />
              </button>
            </div>

            <div className=" gap-2 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full">
              <Content />
            </div>
          </div>
    </Container>
    </>
  );
};

export default PeopleIdea;
