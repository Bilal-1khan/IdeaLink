import React, { useState } from "react";
import CollectionsIcon from '@mui/icons-material/Collections';

const CreatePost = () => {
  const [ideaPost,setIdeaPost] = useState('')
  const [images,setImages] = useState('')
  const [postImage,setPostImage] = useState('')

  function postCreating(event) {
    const uploadImages = event.target.files[0]
    setImages(URL.createObjectURL(uploadImages))
  }

  const handleSumbit =(e)=>{
    e.preventDefault()
    setPostImage(images)
    setImages('')
  }
  return (
    <>
      <div className="p-6 w-[31.25rem] bg-[#272727] rounded-xl flex flex-col gap-1 items-center max-md:w-[36rem] max-sm:w-full">
        <div className="w-full">
          <form onSubmit={handleSumbit} className="flex flex-col gap-4">
            {/* input */}
            <div>
            <input
              type="text"
              placeholder="Post your idea"
              className="border-none w-full px-3 py-2 rounded-xl outline-none"
              value={''}
              onChange={postCreating}
            />
            </div>
            
            {/* attactment btn */}
            <div className="flex items-center gap-3">
            <input 
            type="file" 
            id="inputFile" 
            className="hidden"
            onChange={postCreating}
            />
            <label htmlFor="inputFile" className="capitalize bg-white py-2 px-4 rounded-xl cursor-pointer font-bold text-[#148282]"><CollectionsIcon/></label>
           <span className="w-[9.375rem] rounded-xl inline-block">
            {
              images && (<img src={images} className="w-full h-[100px] rounded-xl" />)
            }
           
          </span> 

            </div>
           
            {/* post btn */}
            <div>
            <button className="border-none outline-none w-full capitalize text-[#272727] bg-white p-2 rounded-xl font-bold">
              post
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
