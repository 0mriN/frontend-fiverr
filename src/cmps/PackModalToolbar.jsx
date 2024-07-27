import React from 'react'

export function PackModalToolbar({ likedByUsers }) {
  return (
    <div className="toolbar-wrapper">
      <div className='toolbar'>
        <div className='collect-wrapper'>
          <div className='collect-heart'>
            <button className="toolbar-button like">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
            </button>
          </div>
          <span className='collect-count'>
            {likedByUsers}
          </span>
          <span className='modal-share'>
            <button className="toolbar-button-share">
              <svg width="16" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M11 10c-.707 0-1.356.244-1.868.653L5.929 8.651a3.017 3.017 0 0 0 0-1.302l3.203-2.002a3 3 0 1 0-1.06-1.696L4.867 5.653a3 3 0 1 0 0 4.694l3.203 2.002A3 3 0 1 0 11 10Z"></path></svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

