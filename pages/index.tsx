import type { NextPage } from 'next'
import Head from 'next/head'
import ItemList from './../src/ui/itemList'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from "styled-components"


const Home: NextPage = () => {
  type Array = {
    "title": string
    "lists": string[]
  }
  
const items = [
    {
      "title": "HTML/CSS",
      "lists":  ["レスポンシブ対応時のスタイルの指定方法", "test", "test01"]
    },
    {
      "title": "JavaScriptについて",
      "lists": ["レスポンシブ対応時のスタイルの指定方法", "test", "test01"]
    },
    {
      "title": "React",
      "lists": ["レスポンシブ対応時のスタイルの指定方法", "React", "test01"]
    },
    {
      "title": "Swift",
      "lists": ["レスポンシブ対応時のスタイルの指定方法", "Swift", "test01"]
    },
    {
      "title": "WebAPI",
      "lists": ["レスポンシブ対応時のスタイルの指定方法", "WebAPI", "test01"]
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
      <h1>my-note</h1>
      </header>
      <main className={styles.main}>
        {<ItemList items={items} />}
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}
const Main = styled.main({
  padding:"2.4rem 0"
})

export default Home
