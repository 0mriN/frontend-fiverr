import { useState } from "react"


export function LongTxt({ txt, length = 65 }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }
    
    if (txt.length <= length) {
        return <p>{txt}</p>
    }

    const text = isExpanded ? txt : `${txt.slice(0, length)}...`
    return (
        <p>
            {text}
        </p>

    )
}