import React, { useEffect, useRef, useState } from 'react'

export function StickyWrapper({ children }) {
  const wrapperRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const [originalOffsetTop, setOriginalOffsetTop] = useState(null)

  useEffect(() => {
    // Store the original offset top of the element on mount
    if (wrapperRef.current) {
      setOriginalOffsetTop(wrapperRef.current.offsetTop)
    }
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (!wrapperRef.current) return

      // Check if the element is scrolled past the original position
      const isPastThreshold = window.scrollY >= originalOffsetTop

      setIsSticky(isPastThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [originalOffsetTop])

  return (
    <div
      ref={wrapperRef}
      className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}
    >
      {children}
    </div>
  )
}


