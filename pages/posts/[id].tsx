import type { NextApiRequest, NextApiResponse } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { type } from 'os'
import { getPostData, getAllPostIds } from '../../src/lib/posts'
import Layout from '../../src/ui/layout'
import { ParsedUrlQuery } from 'node:querystring'

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   const {
//     query: { pid },
//   } = req
//   res.end(`Post: ${pid}`)
// }

type postDataType = {
  title: string
  id: string
  date: string
}

export default function Post(postData: postDataType) {
  // console.log(postData)
  return (
    <Layout>
      {/* <p>{postData.title}</p> */}
      <p>{postData.id}</p>
      {/* <p>{postData.date}</p> */}
    </Layout>
  )
}

type paramsType = {
  id: string
  title: string
  date: string
  key: string
}
type propsType = {
  postData: paramsType
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// interface Params {
//   id: string
//   title:string,
//   date:string
// }
interface Params extends ParsedUrlQuery {
  id: string
  title: string
  body: string
  date:string
}

export interface Item {
  id: number
  title: string
  body: string
}

interface Props {
  item: Item
}


// type Props = { posts: Post[] };


export const getStaticProps: GetStaticProps<Params> = async ({params}) => {
  // ...
  const postData = getPostData(params!.id)
  console.log(postData)

  // returnの方が間違っている
  return {
    props: {
      postData,
      // id: 'test',
    },
  }
}

// export async function getStaticProps (params:any) {
//   console.log(params)
//   const postData = getPostData(params.id)
//   return {
//     props: {
//       postData,
//     },
//   }
// }
