import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from './footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-5 lg:px-10">
        <div className="w-full lg:w-5/6">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout