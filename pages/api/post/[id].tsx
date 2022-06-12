import type { NextApiRequest, NextApiResponse } from 'next'
import { type } from 'os'
import { getPostData, getAllPostIds } from '../../../src/lib/posts'
// export default (req: NextApiRequest, res: NextApiResponse) => {
//   const {
//     query: { pid },
//   } = req
//   res.end(`Post: ${pid}`)
// }

import Layout from '../../../src/ui/layout'

type postDataType = {
  title: string
  id: string
  date: string
}

export default function Post(postData: postDataType) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

type paramsType = {
  id: string
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(params: paramsType) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
