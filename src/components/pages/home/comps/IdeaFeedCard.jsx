// import React, { useEffect } from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import { PostDropDown } from "../../../index";
// import service from "../../../../appwrite/config"; // Import your Appwrite service
// // import service from "../../appwrite/config";
// import { useDispatch, useSelector } from "react-redux";
// import { setPosts, setLoading, setError } from "../../../../store/postSlice"; // Import actions

// const IdeaFeedCard = () => {
//   const dispatch = useDispatch();
//   const { posts, loading } = useSelector((state) => state.postReducer);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       dispatch(setLoading(true));
//       try {
//         const response = await service.getPosts();
//         dispatch(setPosts(response.documents));
//       } catch (error) {
//         dispatch(setError(error.message));
//       } finally {
//         dispatch(setLoading(false));
//       }
//     };

//     fetchPosts();
//   }, [dispatch]);

//   if (loading) {
//     return <div className="text-white">Loading posts...</div>;
//   }

//   return (
//     <>
//       {posts.map((post) => (
//         <div
//           key={post.$id}
//           className="bg-[#272727] w-[31.25rem] rounded-xl cursor-default transition-all max-md:w-[36rem] max-sm:w-full mb-4"
//         >
//           <div className="topSection flex items-center gap-5 p-3">
//             <div className="w-[2.625rem] h-[2.625rem] rounded-full border-2 border-[#58dddd] overflow-hidden">
//               <img
//                 src="images/profile1.png" // Replace with user profile image
//                 alt="profile"
//                 className="w-full rounded-full"
//               />
//             </div>
//             <div className="capitalize text-white">
//               <p>{post.userId}</p> {/* Replace with user name */}
//             </div>
//             <div className="flex-1 text-end relative text-white">
//               <PostDropDown />
//             </div>
//           </div>

//           {/* Display post image */}
//           {post.featuredImage && (
//             <div className="w-full h-[25rem]">
//               <img
//                 src={service.filePreview(post.featuredImage)}
//                 alt="post"
//                 className="w-full h-full max-sm:h-full object-cover"
//               />
//             </div>
//           )}

//           {/* Display post content */}
//           <div className="flex flex-col">
//             <p className="text-sm text-white px-2 py-3 flex-1">
//               {post.content}
//             </p>
//             <div className="btns p-3 flex gap-2 text-white">
//               <button>
//                 <FavoriteIcon />
//               </button>
//               <button>
//                 <ChatBubbleOutlineIcon />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default IdeaFeedCard;

import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { PostDropDown } from "../../../index";
// import service from "../../appwrite/config";
import service from "../../../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
// import { setPosts, setLoading, setError } from "../../store/postSlice";
import { setPosts, setLoading, setError } from "../../../../store/postSlice";

const IdeaFeedCard = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.postReducer);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(setLoading(true));
      try {
        const response = await service.getPosts();
        dispatch(setPosts(response.documents || []));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchPosts();
  }, [dispatch]);

  if (loading) {
    return <div className="text-white">Loading posts...</div>;
  }

  if (!posts || posts.length === 0) {
    return <div className="text-white">No posts found.</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.$id}
          className="bg-[#272727] w-[31.25rem] rounded-xl cursor-default transition-all max-md:w-[36rem] max-sm:w-full mb-4"
        >
          <div className="topSection flex items-center gap-5 p-3">
            <div className="w-[2.625rem] h-[2.625rem] rounded-full border-2 border-[#58dddd] overflow-hidden">
              <img
                src="images/profile1.png" // Replace with user profile image
                alt="profile"
                className="w-full rounded-full"
              />
            </div>
            <div className="capitalize text-white">
              <p>{post.userName || "Unknown User"}</p> {/* Display user's name */}
            </div>
            <div className="flex-1 text-end relative text-white">
              <PostDropDown />
            </div>
          </div>

          {/* Display post image */}
          {post.featuredImage && (
            <div className="w-full h-[25rem]">
              <img
                src={service.filePreview(post.featuredImage)}
                alt="post"
                className="w-full h-full max-sm:h-full object-cover"
              />
            </div>
          )}

          {/* Display post content */}
          <div className="flex flex-col">
            <p className="text-sm text-white px-2 py-3 flex-1">{post.content}</p>
            <div className="btns p-3 flex gap-2 text-white">
              <button>
                <FavoriteIcon />
              </button>
              <button>
                <ChatBubbleOutlineIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IdeaFeedCard;