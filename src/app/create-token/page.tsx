import { Navbar } from '@/Components'
import React from 'react';
import {CreateToken} from '@/Components'

const page = () => {
  return (
    <>
        <Navbar todoAirdrop={true} />
        <CreateToken />
    </>
  )
}

export default page