import { useContext, useEffect, useRef } from "react"
import { useOnScreen } from "./useOnScreen";
import { NavContext } from "../context/navContent";
export const useNav = (navLinkId) =>{
    const ref = useRef(null)
    const {setActiveLinkId} = useContext(NavContext);
    const isOnScreen = useOnScreen(ref);
    useEffect(() => {
        console.log(navLinkId)
        if(isOnScreen){
            setActiveLinkId(navLinkId);
            
        }
    }, [isOnScreen,setActiveLinkId,navLinkId])
    return ref;
}