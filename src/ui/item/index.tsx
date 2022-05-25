import Link from 'next/link';
import React from "react"

type propsType = {
  lists:string[]
}

const InnerItems:any = (props: propsType) => {
  const item = props.lists.map((list)=>{
      return(
        <li key={list}>
          <Link href={""}>{list}</Link>
        </li>
      )
  })
  return (
    {item}
  )
}

export default InnerItems