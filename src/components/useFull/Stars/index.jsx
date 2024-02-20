import React from 'react'
import { FaStar } from "react-icons/fa";
import useScreenSize from '../../../hooks/useScreenSize';

const Stars = ({ score }) => {
    const { isSM } = useScreenSize()

    return (
        <>
            <FaStar size={isSM ? 24 : 18} color={score >= 1 ? "var(--state-warning-warning-light)" : "var(--neutral-cbcbcb)"} />
            <FaStar size={isSM ? 24 : 18} color={score >= 2 ? "var(--state-warning-warning-light)" : "var(--neutral-cbcbcb)"} />
            <FaStar size={isSM ? 24 : 18} color={score >= 3 ? "var(--state-warning-warning-light)" : "var(--neutral-cbcbcb)"} />
            <FaStar size={isSM ? 24 : 18} color={score >= 4 ? "var(--state-warning-warning-light)" : "var(--neutral-cbcbcb)"} />
            <FaStar size={isSM ? 24 : 18} color={score == 5 ? "var(--state-warning-warning-light)" : "var(--neutral-cbcbcb)"} />
        </>
    )
}

export default Stars