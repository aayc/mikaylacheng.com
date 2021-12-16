import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mikayla Cheng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl">mikayla cheng</h1>
        <br />
        <p className="bg-green-300 description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
