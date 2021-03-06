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

type Params = {
  id: string
  title: string
  date: string
}
interface Props extends ParsedUrlQuery {
  id: string
  title: string
  body: string
  date: string
}

interface props {
  id: string
}

// type Props = { posts: Post[] };

type postData = {
  id: string
  contentHtml: string
  title: string
  date: string
}

type staticProps = {
  props: {
    postData: Promise<postData>
  }
}

export const getStaticProps = async ({ params }: { params: { id: string } }): Promise<postData> => {
  // ...
  const postData = getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

type postDataType = {
  title: string
  id: string
  date: string
  // contentHtml: string
}

const Post = (postData: postDataType) => {
  return (
    <Layout>
      {/* <p>{postData.title}</p> */}
      <p>{postData.title}</p>
      {/* <p>{postData.date}</p> */}
    </Layout>
  )
}

export default Post
// export async function getStaticProps (params:any) {
//   console.log(params)
//   const postData = getPostData(params.id)
//   return {
//     props: {
//       postData,
//     },
//   }
// }
