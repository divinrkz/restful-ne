import React from 'react'
import {Link } from 'react-router-dom'
export function NotFoundPage() {
   return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-600">
        <div>
                <p className="text-5xl text-white md:text-7xl lg:text-9xl">404</p>
                <p className="text-sm text-center text-white underline"><Link to='/login'>Login</Link></p>
        </div>
    </div>
   )
}