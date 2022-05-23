import styled from "styled-components";
import Link from 'next/link';



type propsType = {
  items: string[] 
  innerItems: string[]
}

const ItemLists = (props:propsType) =>{

  const innerLists = props.innerItems.map((item)=>{
    return(
      <li key={item}>
        <Link href="">{item}</Link>
      </li>
    )
  })

  const lists = props.items.map((item)=>{
    return(
      <li key={item}>
        <h2>{item}</h2>
        <ul>
          {innerLists}
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
    }
    
  }
})

export default ItemLists;