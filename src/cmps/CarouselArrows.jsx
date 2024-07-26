import React from 'react'

export const CustomLeftArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-left-arrow"
    onClick={onClick}
  >
    <svg
      viewBox="0 0 24 24"
      transform='translate(-1,0)'
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </div>
)


export const CustomRightArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-right-arrow"
    onClick={onClick}
  >
    <svg
      viewBox="0 0 24 24"
      transform='translate(1,0)'
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </div>
)
