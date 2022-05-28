// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type DateType = [InnerDataTypes]

interface InnerDataTypes  {
  title: string,
  lists: [ListsType]
}


interface ListsType {
  text: string,
  href: string
}



const Data:DateType =  [
  {
    "title": "HTML/CSS",
    "lists": [
      {
      "text": "レスポンシブ対応時のスタイルの指定方法",
      "href": "posts"
      },
      {
        "text": "test",
        "href": "posts"
      },
      {
        "text": "レスポンシブ対応時のスタイルの指定方法",
        "href": "posts"
      },
    ]
  },
  {
    "title": "JavaScriptについて",
    "lists":  [
      {
      "text": "レスポンシブ対応時のスタイルの指定方法",
      "href": "posts"
      },
      {
        "text": "test",
        "href": "posts"
      },
      {
        "text": "レスポンシブ対応時のスタイルの指定方法",
        "href": "posts"
      },
    ]
  },
  {
    "title": "React",
    "lists":  [
      {
      "text": "レスポンシブ対応時のスタイルの指定方法",
      "href": "posts"
      },
      {
        "text": "test",
        "href": "posts"
      },
      {
        "text": "レスポンシブ対応時のスタイルの指定方法",
        "href": "posts"
      },
    ]
  },
  {
    "title": "Swift",
    "lists":  [
      {
      "text": "レスポンシブ対応時のスタイルの指定方法",
      "href": "posts"
      },
      {
        "text": "test",
        "href": "posts"
      },
      {
        "text": "レスポンシブ対応時のスタイルの指定方法",
        "href": "posts"
      },
    ]
  },
  {
    "title": "WebAPI",
    "lists":  [
      {
      "text": "レスポンシブ対応時のスタイルの指定方法",
      "href": "posts"
      },
      {
        "text": "test",
        "href": "posts"
      },
      {
        "text": "レスポンシブ対応時のスタイルの指定方法",
        "href": "posts"
      },
    ]
  },
]

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<DataTypes>
// ) {
//   res.status(200).json(Data)
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(Data)
}
