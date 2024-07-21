import { useState } from "react"


export function LongTxt({ txt, length = 65 }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }
    
    if (txt.length <= length) {
        return <span>{txt}</span>
    }

    const text = isExpanded ? txt : `${txt.slice(0, length)}...`
    return (
        <span>
            {text}
        </span>

    )
}