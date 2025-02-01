import React, { useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import service from "../../../../appwrite/config";
// import service from "../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../../store/postSlice"; // Import the addPost action

const CreatePost = () => {
  const [ideaPost, setIdeaPost] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.userData);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     // 1. Upload image to Appwrite Storage
  //     let imageId = null;
  //     if (imageFile) {
  //       const uploadedFile = await service.uploadFile(imageFile);
  //       imageId = uploadedFile.$id;
  //     }

  //     // 2. Create post in Appwrite Database
  //     const postData = {
  //       content: ideaPost,
  //       featuredImage: imageId,
  //       status: "active",
  //       userId: user.$id,
  //     };
  //     const newPost = await service.createPost(postData);

  //     // 3. Update Redux state with the new post
  //     dispatch(addPost(newPost));

  //     // 4. Clear form
  //     setIdeaPost("");
  //     setImageFile(null);
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //     alert("Failed to create post. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // 1. Upload image to Appwrite Storage
      let imageId = null;
      if (imageFile) {
        const uploadedFile = await service.uploadFile(imageFile);
        imageId = uploadedFile.$id;
      }
  
      // 2. Create post in Appwrite Database
      const postData = {
        content: ideaPost,
        featuredImage: imageId,
        status: "active",
        userId: user.$id,
        userName: user.name, // Include user's name
      };
      const newPost = await service.createPost(postData);
  
      // 3. Update Redux state with the new post
      dispatch(addPost(newPost));
  
      // 4. Clear form
      setIdeaPost("");
      setImageFile(null);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="p-6 w-[31.25rem] bg-[#272727] rounded-xl flex flex-col gap-1 items-center max-md:w-[36rem] max-sm:w-full">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Input for post text */}
          <div>
            <input
              type="text"
              placeholder="Post your idea"
              className="border-none w-full px-3 py-2 rounded-xl outline-none"
              value={ideaPost}
              onChange={(e) => setIdeaPost(e.target.value)}
              required
            />
          </div>

          {/* Image upload button */}
          <div className="flex items-center gap-3">
            <input
              type="file"
              id="inputFile"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
            <label
              htmlFor="inputFile"
              className="capitalize bg-white py-2 px-4 rounded-xl cursor-pointer font-bold text-[#148282]"
            >
              <CollectionsIcon />
            </label>
            {imageFile && <span className="text-white">{imageFile.name}</span>}
          </div>

          {/* Post button */}
          <div>
            <button
              type="submit"
              className="border-none outline-none w-full capitalize text-[#272727] bg-white p-2 rounded-xl font-bold"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
