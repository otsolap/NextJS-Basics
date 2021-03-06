import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false
})

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authReady, setAuthReady] = useState(false)

    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user)
            netlifyIdentity.close()
            console.log('Login Event triggered')
        })

        netlifyIdentity.on('logout', () => {
            setUser(null)
            console.log('Logout event triggered')
        })

        netlifyIdentity.on('init', (user) => {
            setUser(user)
            setAuthReady(true)
            console.log('Auth ready event triggered')
        })


        netlifyIdentity.init()

        // Koska useEffectissä. Nää sammutetaan
        // jotta funktiot ei pyöri taustalla 24/7
        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    }, [])

    const login = () => {
        netlifyIdentity.open()
    }

    const logout = () => {
        netlifyIdentity.logout()
    }

    const context = {
        user,
        login,
        logout,
        authReady
    }

    return (
        <AuthContext.Provider value={context}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext