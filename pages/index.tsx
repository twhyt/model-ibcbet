import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styled from 'styled-components'
import LayoutPage from '../components/layouts/layout'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutPage>
        <WrapperHomePage>
          ss
        </WrapperHomePage>
      </LayoutPage>
    </Fragment>
  )
}

const WrapperHomePage = styled.div`
  width: 100%;
  height: 3000px;
  background-color: black;
`

export default Home
