import leftArrow from '../assets/img/svg/arrow-left.svg'
import rightArrow from '../assets/img/svg/arrow-right.svg'

const CustomLeftArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-left-arrow" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
      </div>
    )
}

const CustomRightArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow custom-right-arrow" onClick={onClick}>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
      </div>
    )
  }

 export { CustomLeftArrow, CustomRightArrow }