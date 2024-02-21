import { createContext, useContext, useState } from "react";

const stateContext = createContext()


export const ContextProvider = ({ children }) => {
    const [showCartNotif, setShowCartNotif] = useState(false)

    return (
        <stateContext.Provider
            value={{
                setShowCartNotif,
                showCartNotif
            }}
        >
            {children}
        </stateContext.Provider>
    )
}


export const useContentProvider = () => useContext(stateContext)