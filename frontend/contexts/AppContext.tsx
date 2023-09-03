import React, { createContext, useContext, useState } from 'react';

export const AppContext:any = createContext(null);

export const AppContextProvider = ({ children }:any) => {
    const [isAuthModalOpen, setIsModalOpen] = useState(false);

    const values = React.useMemo(() => ({
        isAuthModalOpen,
        setIsModalOpen
    }), [
        isAuthModalOpen
    ])

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export function useAppContext() {
    const context = useContext(AppContext);
    if(!context)console.error('Error deploying App Context!!!');
    return context;
}