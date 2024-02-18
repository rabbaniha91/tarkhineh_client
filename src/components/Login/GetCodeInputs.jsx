import React, { useState } from 'react'
import styles from "./styles.module.css"




const GetCodeInputs = ({ setConfirmCode, error = false }) => {
    const [index, setIndex] = useState(1)
    const handleJustNumber = (e) => {
        let newIndex = index;
        if (newIndex === 5) {
            setConfirmCode(prev => { return [...prev, e.target.value] })
            e.target.blur()
            return
        }
        newIndex += 1;
        setIndex(newIndex)
        if (e.target.value.length === 1) {
            setConfirmCode(prev => { return [...prev, e.target.value] })
            e.target.blur()
            document.getElementById(newIndex).focus()
        }
    }
    return (
        <div className={`${styles.code_input_container} ${error && styles.error}`}>
            <input type="number" id='1' className={styles.code_input}
                autoFocus
                onInput={(e) => handleJustNumber(e)} />
            <input type="number" id='2' className={styles.code_input}
                onInput={(e) => handleJustNumber(e)} />
            <input type="number" id='3' className={styles.code_input}
                onInput={(e) => handleJustNumber(e)} />
            <input type="number" id='4' className={styles.code_input}
                onInput={(e) => handleJustNumber(e)} />
            <input type="number" id='5' className={styles.code_input}
                onInput={(e) => handleJustNumber(e)} />

        </div>
    )
}

export default GetCodeInputs