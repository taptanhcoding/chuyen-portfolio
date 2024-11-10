'use client'

import { useEffect, useState } from "react"

export const useScroll = () => {
    const [scrollToTop, setScrollToTop] = useState<number>(0)
    const [windowHeight, setWindowHeight] = useState<number>(0)

    useEffect(() => {
        // Kiểm tra nếu window được định nghĩa
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrollToTop(window.scrollY)
            }

            const handleResize = () => {
                setWindowHeight(window.innerHeight)
            }

            // Gán sự kiện scroll và resize
            window.addEventListener('scroll', handleScroll)
            window.addEventListener('resize', handleResize)

            // Thiết lập giá trị ban đầu
            handleScroll()
            handleResize()

            // Xóa sự kiện khi component bị hủy
            return () => {
                window.removeEventListener('scroll', handleScroll)
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])

    return { scrollToTop, windowHeight }
}
