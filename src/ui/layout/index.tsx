import Head from 'next/head'
import Image from 'next/image'
// import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
import styled from 'styled-components'
import Link from 'next/link'

const name = 'shiro'
export const siteTitle = 'Next.js Shiro'

const HeaderElement = styled.header({
  borderBottom: '1px solid #eaeaea',
  padding: '1.2rem 1.6rem',
  cursor: 'pointer',
  color: '#fff',
})

export default function Layout({
  children,
  home,
  article,
}: {
  children?: any
  home?: any
  article?: any
}) {
  return (
    <div className={''}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <title>{siteTitle}</title>
      </Head>
      <HeaderElement className='header'>
        <h1>my-note</h1>
      </HeaderElement>
      <main>{children}</main>
      {article && (
        <div className={''}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
