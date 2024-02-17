import React, { useState } from 'react'
import styles from "./styles.module.css"

const TextInput = React.memo(({ placeholder, width, name, type, onChange, onBlur, value, error, touch }) => {
    const [dirtyInput, setDirtyInput] = useState(false)
    return (
        <div
            className={styles.container}
            style={{
                width: width,
                borderColor: dirtyInput && error
                    ? "var(--state-error-error)"
                    : dirtyInput && !error
                        ? "var(--state-success-success)"
                        : "var(--neutral-white)"
            }}
        >
            <input onInput={(e) => {
                e.target.value === "" ? setDirtyInput(false) : setDirtyInput(true)
            }} className={styles.input}
                type={type}
                name={name}
                id={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            <label htmlFor={name} className={!dirtyInput ? styles.placeholder : styles.dirty_placeholder}>{placeholder}</label>
        </div>
    )
})

export default TextInput



