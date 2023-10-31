import React, { useState } from 'react'
import { HomePage } from '../modules/home/page'
import { useSession } from 'next-auth/react'

const Index = () => {
  //const { status, data } = useSession();
  //console.log(status, data?.user.name)

  return <HomePage />
}

export default Index
