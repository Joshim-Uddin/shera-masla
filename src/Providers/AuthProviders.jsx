import React, { createContext, useState } from 'react';

export const authContext = createContext(null)
const AuthProviders = ({children}) => {
    const [searchModal, setSearchModal] = useState(false)
    const info = {
        searchModal,
        setSearchModal
    }
    return <authContext.Provider value={info}>{children}</authContext.Provider>;
};

export default AuthProviders;