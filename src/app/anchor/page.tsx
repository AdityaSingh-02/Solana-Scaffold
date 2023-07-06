import React from 'react';
import { Increment, Navbar } from '@/Components';
import { Initialize } from '@/Components';

const AnchorProgram = () => {
  
  return (
    <>
      <Navbar todoAirdrop={true} />
      <Initialize />
      <Increment />
    </>
  )
}

export default AnchorProgram