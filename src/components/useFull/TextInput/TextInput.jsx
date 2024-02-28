import React, { useState } from 'react'
import styles from "./styles.module.css"

const TextInput = React.memo(({
    placeholder, width, name, type, onChange, onBlur,
    value, error, borderColor, outlined, bgColor, dir = "rtl",
    autoFocus = false, icon, shadow = false, shadowColor
}) => {
    const [dirtyInput, setDirtyInput] = useState(false)
    const [focus, setFocus] = useState(false)
    return (
        <div
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={styles.container}
            style={{
                width: width,
                border: "0.5px solid",
                borderRadius: "4px",
                borderColor: dirtyInput && error
                    ? "var(--state-error-error)"
                    : dirtyInput && !error
                        ? "var(--state-success-success)"
                        : borderColor,
                boxShadow: shadow && `1px 1px 1px 0 ${shadowColor}, -1px -1px 1px 0 ${shadowColor}`
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
                dir={dir}
                autoFocus={autoFocus}
                style={{ color: borderColor, padding: outlined && "14px 8px" }}
            />
            <label
                htmlFor={name}
                style={{ color: borderColor, backgroundColor: outlined ? bgColor : "transparent" }}
                className={`${focus && !outlined && !dirtyInput
                    ? styles.placeholder_inlined
                    : focus && outlined && !dirtyInput
                        ? styles.placeholder_outlined
                        : !focus && !outlined && dirtyInput ? styles.dirty_placeholder_inlined
                            : !focus && outlined && dirtyInput ? styles.dirty_placeholder_outlined
                                : focus && !outlined && dirtyInput ? styles.placeholder_inlined
                                    : focus && outlined && dirtyInput ? styles.dirty_placeholder_outlined
                                        : styles.placeholder_inlined}`}>
                {placeholder}
            </label>
            {icon && (
                <div className={styles.icon}>
                    {icon}
                </div>
            )}
        </div>
    )
})

export default TextInput



