import React, { useState } from 'react'
import { HomePage } from '../modules/home/page'
import { signIn } from "next-auth/react"

const Index = () => {
  return (
    // <HomePage/>
    <button onClick={() => {
      signIn()
    }}>Login</button>
  )
}

export default Index