import React from 'react';
import '../../src/assets/styles/cmps/PackModalToolbar.scss';

export function PackModalToolbar() {
  return (
    <div className="toolbar">
      <button className="toolbar-button menu">
        <svg width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg"><path d="M15.0769 0H0.923077C0.413276 0 0 0.415736 0 0.928571C0 1.44141 0.413276 1.85714 0.923077 1.85714H15.0769C15.5867 1.85714 16 1.44141 16 0.928571C16 0.415736 15.5867 0 15.0769 0Z"></path><path d="M15.0769 5.57143H0.923077C0.413276 5.57143 0 5.98717 0 6.5C0 7.01284 0.413276 7.42857 0.923077 7.42857H15.0769C15.5867 7.42857 16 7.01284 16 6.5C16 5.98717 15.5867 5.57143 15.0769 5.57143Z"></path><path d="M15.0769 11.1429H0.923077C0.413276 11.1429 0 11.5586 0 12.0714C0 12.5843 0.413276 13 0.923077 13H15.0769C15.5867 13 16 12.5843 16 12.0714C16 11.5586 15.5867 11.1429 15.0769 11.1429Z"></path></svg>
      </button>
      <button className="toolbar-button like">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg> <p>8,959</p>
      </button>
      <button className="toolbar-button share">
        <svg width="16" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M11 10c-.707 0-1.356.244-1.868.653L5.929 8.651a3.017 3.017 0 0 0 0-1.302l3.203-2.002a3 3 0 1 0-1.06-1.696L4.867 5.653a3 3 0 1 0 0 4.694l3.203 2.002A3 3 0 1 0 11 10Z"></path></svg>
      </button>
      <button className="toolbar-button more">
        <svg width="16" height="16" viewBox="0 0 16 4" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><circle cx="2" cy="2" r="2"></circle><circle cx="8" cy="2" r="2"></circle><circle cx="14" cy="2" r="2"></circle></svg>
      </button>
    </div>
  );
}

