import React, { useEffect, useRef, useState } from 'react'

export function StickyWrapper({ children }) {
  const wrapperRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const [originalOffsetTop, setOriginalOffsetTop] = useState(null)

  useEffect(() => {
    if (wrapperRef.current) {
      setOriginalOffsetTop(wrapperRef.current.offsetTop)
    }
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (!wrapperRef.current) return
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


