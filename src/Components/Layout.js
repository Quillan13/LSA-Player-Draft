import React from 'react'
import { Link } from 'gatsby'
const Layout = ({children}) => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/page2'>Page 2</Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}
export default Layout