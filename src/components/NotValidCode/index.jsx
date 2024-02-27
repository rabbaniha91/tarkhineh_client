import React from 'react'
import { IoCloseCircle } from 'react-icons/io5'
import { keyframes } from 'styled-components'

const NotValidCode = ({ setNotValidCode }) => {
    return (
        <div
            style={{
                backgroundColor: "var(--state-error-error-extralight)",
                padding: "12px 24px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                gap: "9px",
            }}>
            <span style={{ color: "var(--state-error-error)" }}>کد تائید نامعتبر!</span>
            <IoCloseCircle color='var(--state-error-error)' size={34} onClick={() => {
                setNotValidCode(false)
            }} />
        </div>
    )
}

export default NotValidCode