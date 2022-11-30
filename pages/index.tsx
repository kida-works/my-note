import type { NextPage } from 'next'
import { FC, ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'
// import ItemList from './../src/ui/itemList'
// import Image from 'next/image'
import Layout from '../src/ui/layout'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { getSortedPostsData } from '../src/lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

import path from 'path'
const postsDirectory = path.join(process.cwd(), 'posts')

type postDataResult = {
  id: string
  title: string
  date: { title: string; date: string }
  // isEmpty: boolean
  // excerpt: string
  // orig: string
  // children: ReactNode
}
interface dataItemsType {
  id: string
  title: string
  date: any
}

export const USERS_PATH = './posts'

export const Item = (props: dataItemsType) => {
  return (
    <>
      <Link href={`${USERS_PATH}/${props.id}`}>
        <p>
          {props.title} : {props.id} : {props.date}
          {/* {console.log("title:", typeof props.title)}
          {console.log("id:", typeof props.id)}
          {console.log("date:", typeof props.date)} */}
        </p>
      </Link>
    </>
  )
}

const Home: NextPage<{ allPostsData: Array<postDataResult> }> = ({ allPostsData }) => {
  // console.log(postsDirectory)

  return (
    <Layout>
      <main className={styles.main}>
        <section className=''>
          <TableContents className=''>
            {allPostsData.map((item: postDataResult) => (
              <li key={item.id}>
                <Item title={item.title} id={item.id} date={item.date} />
              </li>
            ))}
          </TableContents>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </Layout>
  )
}
// const Main = styled.main({
//   padding:"2.4rem 0"
// })

const TableContents = styled.ul({
  padding: '0 2.4rem',
  li: {
    listStyle: 'none',
    color: '#fff',
    padding: '0.8rem',
    cursor: 'pointer',
    ':hover': {
      color: '#B260EA',
      a: {
        display: 'block',
        color: '#B260EA',
        cursor: 'pointer',
        width: '100%',
      },
    },
  },
})

export default Home
