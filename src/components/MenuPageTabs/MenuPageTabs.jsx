import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { useLocation } from 'react-router-dom'

const MenuPageTabs = () => {
    const location = useLocation()
    const [stage, setStage] = useState("")



    useEffect(() => {
        if (location.state !== "") {
            setStage("")
        }
    }, [location.state])



    return (
        <div className={styles.container}>
            <div className={styles.content_container}>
                <span
                    onClick={() => {
                        setStage(1)
                        location.state = ""
                    }}
                    style={{
                        color: location.state === 1 || stage === 1
                            ? "var(--green-primary)"
                            : "var(--neutral-717171)",
                        fontWeight: location.state === 1 || stage === 1
                            ? "bold"
                            : "normal",
                        borderColor: location.state === 1 || stage === 1
                            ? "var(--green-primary)"
                            : "transparent"

                    }}>غذای اصلی</span>
                <span
                    onClick={() => {
                        setStage(2)
                        location.state = ""
                    }}
                    style={{
                        color: location.state === 2 || stage === 2
                            ? "var(--green-primary)"
                            : "var(--neutral-717171)",
                        fontWeight: location.state === 2 || stage === 2
                            ? "bold"
                            : "normal",
                        borderColor: location.state === 2 || stage === 2
                            ? "var(--green-primary)"
                            : "transparent"
                    }}>پیش غذا</span>
                <span
                    onClick={() => {
                        setStage(3)
                        location.state = ""
                    }}
                    style={{
                        color: location.state === 3 || stage === 3
                            ? "var(--green-primary)"
                            : "var(--neutral-717171)",
                        fontWeight: location.state === 3 || stage === 3
                            ? "bold"
                            : "normal",
                        borderColor: location.state === 3 || stage === 3
                            ? "var(--green-primary)"
                            : "transparent"
                    }}>دسر</span>
                <span
                    onClick={() => {
                        setStage(4)
                        location.state = ""
                    }}
                    style={{
                        color: location.state === 4 || stage === 4
                            ? "var(--green-primary)"
                            : "var(--neutral-717171)",
                        fontWeight: location.state === 4 || stage === 4
                            ? "bold"
                            : "normal",
                        borderColor: location.state === 4 || stage === 4
                            ? "var(--green-primary)"
                            : "transparent"
                    }}>نوشیدنی</span>
            </div>
        </div>
    )
}

export default MenuPageTabs