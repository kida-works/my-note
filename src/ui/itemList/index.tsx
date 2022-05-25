import styled from "styled-components";
import Link from 'next/link';
import { normalizeRepeatedSlashes } from "next/dist/shared/lib/utils";
import InnerItems from "../item"

type Array = {
  "title": string
  "lists": string[]
}

type propsType = {
  items: Array[]
}


const ItemLists = (props:propsType) =>{
  
  const lists = props.items.map((item)=>{
    return(
      <li key={item.title}>
        <h2>{item.title}</h2>
        <ul>
          <InnerItems lists={item.lists} />
        </ul>
      </li>
    )
  })

  return(
    <>
      <TableContents>
        {lists}
      </TableContents>
    </>
  )
}

const TableContents = styled.ul({
  padding: "0 2.4rem",
  "li":{
    color: "#fff",
    padding: "0.8rem",
    "h2":{
      padding: "0.8rem",
    },
    "a":{
      display: "block",
      color: "#fff",
      // padding: "0.8rem",
      transition: "0.2s",
      cursor: "pointer",
      width: "100%",
      ":hover":{
        color: "#B260EA",
      },
    },
    // "ul":{
    //   "li":{
        
    //   }
    // }
    
  }
})

export default ItemLists;