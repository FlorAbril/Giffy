import { useEffect, useRef } from "react";

export default function useSEO({description,title}){
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

    useEffect(()=>{
        const previousTitle = prevTitle.current
        if(title){
            document.title = `${title} | Giffy`
        }
        return  () =>{
            console.log('efecto title');
            document.title = previousTitle
        } 
    },[title])
    
    useEffect(()=>{
        const previousDescription = prevDescription.current
        const metaDescription = document.querySelector('meta[name="description"]')

        if(description){
            metaDescription.setAttribute('content',description)
        }
        return () => metaDescription.setAttribute('content',previousDescription)        
    },[description])
}

