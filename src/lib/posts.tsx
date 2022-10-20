import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

type dateType = {
  date: idType
}
type idType = {
  id: string
}

export const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }: any, { date: b }: any) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }

  // ]
  return fileNames.map((fileName: any) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

// interface postData {
//   id: string
// }
// type postDataType = {
//   title: string
//   id: string
//   date: string
//   contentHtml: string
// }
export type postData = {
  id:string
  contentHtml:string
  title:string
  date:string
}

type postDataType = {
  locales: any
  id: string
  locale: any
  defaultLocale: string
}

// export const getPostData = async (id: string): Promise<postData> => {
//   const fullPath = path.join(postsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)

//   // console.log(matterResult.data)
//   // Combine the data with the id
//   console.log(matterResult)
//   return {
//     id,
//     ...matterResult.data,
//   }
// }

export const getPostData = async (id: string): Promise<postData> => {
  // console.log(id)
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // console.log(matterResult.data)
  // Combine the data with the id
  // console.log(matterResult)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()
    const title = matterResult.data.title
    const date = matterResult.data.date
  return {
    id,
    contentHtml,
    title,
    date,
  }
}
