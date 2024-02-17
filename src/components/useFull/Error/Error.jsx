import React from 'react'
import { MdOutlineErrorOutline } from "react-icons/md";

const Error = React.memo(({ value }) => {
    return (
        <div style={{
            fontSize: "var(--small-desktop)",
            color: "var(--state-error-error)",
            textAlign: "right",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "4px"
        }}>
            <MdOutlineErrorOutline size={18} />
            {value}

        </div>
    )
})

export default Error