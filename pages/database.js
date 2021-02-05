import Head from 'next/head'
import Layout from '../components/layout'
import Content from "../content/database.md"

export default function currentData () {
  return (
    <>
    <Head>
      <title>△[database]</title>
      <description>What is the state of the world of Shielkwamm?  Literal Database entries right here, bruh!</description>
    </Head>
      <Content/>
    </>
  )
}