import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

type LayoutProps = {
    children: any
    showSideBar: boolean,
    showHome: boolean
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="container">
      <Head>
        <title>Mikayla Cheng</title>
        <link key="1" rel="icon" href="/favicon.ico" />
        <link key="2" rel="preconnect" href="https://fonts.googleapis.com" />
        <link key="3" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link key="4" href="https://fonts.googleapis.com/css2?family=Petrona:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="mx-12 mt-12">
        <div className="flex justify-between">
          { props.showHome ?  <a href="/"><h1 className="text-3xl font-bold">mikayla cheng</h1></a> : <div></div> }
          <NavBar></NavBar>
        </div>
        <div className="flex mt-12">
          {props.showSideBar ? 
            <SideBar></SideBar> : <div className="pr-56"></div>}
          {props.children}
        </div>
        <br />
      </div>
    </div>
  )
}