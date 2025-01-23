import { createContext,useContext } from "react";

export const FeedCardContext = createContext({
    Card:[{}],
    addFeed: ()=>{},
    deleteFeed: ()=>{},
    editFeed: ()=>{},
})

export const FeedCardContextProvider = FeedCardContext.Provider

export function useFeedCardContext() {
    return useContext(FeedCardContext)
}