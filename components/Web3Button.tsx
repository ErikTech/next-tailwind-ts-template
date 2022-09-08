// utilize the connect and disconnect functions for our wallet within the app.
import React from 'react'
import { useWeb3Context } from '../context/Web3Context'
import { useWeb3 } from '../hooks'

interface ConnectProps {
  connect: (() => Promise<void>) | null
}

const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <button onClick={connect}>Connect</button>
  ) : (
    <button>Loading...</button>
  )
}

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <button onClick={disconnect}>Disconnect</button>
  ) : (
    <button>Loading...</button>
  )
}

export function Web3Button() {
  const { web3Provider, jsonProvider, connect, disconnect } = useWeb3Context()
  console.log(jsonProvider)
  return web3Provider && jsonProvider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
    <ConnectButton connect={connect} />
  )
}