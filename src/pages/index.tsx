import type { NextPage } from 'next'
import Head from 'next/head'
import useAuth from '../hooks/useAuth'

const Home: NextPage = () => {
  const { login, logout, account, library } = useAuth()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Web3 - {account}</h1>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </main>
    </div>
  )
}

export default Home
