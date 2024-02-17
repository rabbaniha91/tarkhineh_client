import React, { useRef } from 'react'
import styles from "./styles.module.css"

const Buttons = ({
    text, bgColor, icon, color, hoverBg, border = false,
    borderColor, dualIcons, exteraRadius = true, disabled = false, type
}) => {
    const buttonRef = useRef(null)

    return (
        <button
            className={styles.button}
            type={type}
            ref={buttonRef}
            onMouseEnter={() => {
                buttonRef.current.style.backgroundColor = hoverBg
            }}
            onMouseLeave={() => {
                buttonRef.current.style.backgroundColor = bgColor
            }}
            style={{
                padding: "5.5px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontWeight: "500",
                fontSize: "var(--p-desktop)",
                border: border ? `1px solid ${borderColor}` : "none",
                borderRadius: exteraRadius ? "8px" : "4px",
                backgroundColor: `${bgColor}`,
                color: `${color}`,
                transition: "all 0.3s ease-out",

            }}
            disabled={disabled}
        >
            {dualIcons && icon}
            {text}
            {icon}
        </button >
    )
}

export default Buttons