// utilize the connect and disconnect functions for our wallet within the app.
import React from 'react'
import { useWeb3Context } from '../context/Web3Context'


interface InfoProps {
  getInfo: (() => Promise<void>) | null
}

const TestBtn = ({ getInfo }: InfoProps) => {
  return  (
    <button onClick={getInfo}>Get INfo</button>
  ) 
}

// interface DisconnectProps {
//   disconnect: (() => Promise<void>) | null
// }

// const DisInfoButton = ({ disconnect }: DisconnectProps) => {
//   return disconnect ? (
//     <button onClick={disconnect}>Disconnect</button>
//   ) : (
//     <button>Loading...</button>
//   )
// }

export function InfoButton() {
  const { web3Provider, jsonProvider, getInfo } = useWeb3Context()
  console.log(jsonProvider, getInfo)
  return  (<TestBtn getInfo={getInfo} />)
}