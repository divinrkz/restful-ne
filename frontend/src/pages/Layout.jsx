import React from 'react'
import { Navbar } from '../components'

export default function Layout({children})  {
    return (
            <React.Fragment>
                <Navbar />
                {children}
            </React.Fragment>
        )
}