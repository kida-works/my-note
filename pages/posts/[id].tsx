import type { NextApiRequest, NextApiResponse } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
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
  console.log(postData)
  return (
    <Layout>
      <p>{postData.title}</p>
      <p>{postData.id}</p>
      <p>{postData.date}</p>
    </Layout>
  )
}

type paramsType = {
  id: string,
  title:string,
  date:string,
  key:string
}
type propsType = {
  postData:paramsType
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
interface Params extends ParsedUrlQuery {
  id: string
}


// type Props = { posts: Post[] };

export const getStaticProps: GetStaticProps = async (context:paramsType) => {
  // ...
  
  const postData = getPostData(context.id)
  return {
    props: {
      postData,
    },
  }
};


// export async function getStaticProps (params:paramsType) {
//   console.log(params)
//   const postData = getPostData(params.id)
//   return {
//     props: {
//       postData,
//     },
//   }
// }
