import type { NextApiRequest, NextApiResponse } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { type } from 'os'
import { getPostData, getAllPostIds } from '../../src/lib/posts'
import Layout from '../../src/ui/layout'
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
  id: string
}
type propsType = {
  props:paramsType
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// type Props = { posts: Post[] };

export const getStaticProps: GetStaticProps = async ({params}:any) => {
  // ...
  const postData = getPostData(params.id)
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
