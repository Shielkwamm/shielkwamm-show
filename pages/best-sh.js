import Head from 'next/head'
import Layout from '../components/layout'

import Content from "../content/best-sh.md"

export default function bestSh () {
  return (
    <>
    <Head>
      <title>△^best</title>
      <meta
        name="description"
        content="If you wanna get a good look at a good ===>shkwam===>, well, take a look at these."
      />
    </Head>
      <Content/>
    </>
  )
}