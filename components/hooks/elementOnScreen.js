import {useRef, useState, useEffect} from 'react'
const useElementOnScreen = (options) =>{
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFun = entries =>{
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFun, options)
        if(containerRef.current) observer.observe(containerRef.current)

        return()=>{
            if(containerRef.current) observer.observe(containerRef.current)
        }
    }, [containerRef, options])
    return [containerRef,isVisible]
}

export default useElementOnScreen