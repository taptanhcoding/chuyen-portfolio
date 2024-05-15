'use client'

import { useEffect, useState } from "react"

export const useScroll = () => {
    const [scrollToTop,setScrollToTop] = useState<number>(0)
    
    useEffect(() => {
        let evenScroll = (e:Event) => {
            let scroll = window.scrollY
            setScrollToTop(scroll)
        }
        
        document.addEventListener("scroll",evenScroll)

        return () => {
            document.removeEventListener("scroll",evenScroll)
        }
    },[])

    return {scrollToTop,windowHeight :window.innerHeight
    }
}