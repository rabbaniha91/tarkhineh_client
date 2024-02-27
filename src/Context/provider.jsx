import { createContext, useContext, useState } from "react";

const stateContext = createContext()


export const ContextProvider = ({ children }) => {
    const [showCartNotif, setShowCartNotif] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [confirmCode, setConfirmCode] = useState([])

    return (
        <stateContext.Provider
            value={{
                setShowCartNotif,
                showCartNotif,
                isLogin,
                setIsLogin,
                confirmCode,
                setConfirmCode
            }}
        >
            {children}
        </stateContext.Provider>
    )
}


export const useContentProvider = () => useContext(stateContext)