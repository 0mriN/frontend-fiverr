export const CarouselDots = ({ onClick, ...rest }) => {
    const { active } = rest
    return (
        <li
            className={`custom-dot ${active ? 'active' : ''}`}
            onClick={() => onClick()}
        >
            <span />
        </li>
    )
}