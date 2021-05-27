const { useState, useEffect, useRef } = require("react")

export default function useNearScreen({distance= '100px'}={}) {
    const [isNearScreen,setShow] = useState(false)
    const fromRef = useRef()

    useEffect(function () {
        const onChange = (entries,observer) =>{
            const el = entries[0]
            console.log(el.isIntersecting  );
            if(el.isIntersecting){
                setShow(true) 
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange,{ routeMargin : distance })
    
        observer.observe(fromRef.current)
    },[]) 

    return {isNearScreen, fromRef}
}
