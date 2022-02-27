import Head from 'next/head'
import Countdown from '../components/Countdown'

const Home = () => {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Luigi's Birthday Countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full w-full items-center">
        <Countdown />
      </div>
    </div>
  )
}

export default Home
