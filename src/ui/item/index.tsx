import Link from 'next/link';
import React from "react"
import styled from "styled-components"


type propsType = {
  lists:string[]
}

const InnerItems = (props: propsType) => {
  const lists:string[] = props.lists
  const item = lists.map((list)=>{
      return(
        <ListItem key={list}>
          <Link href={"/test"}>{list}</Link>
        </ListItem>
      )
  })
  return (
    <>
      {item}
    </>
    
  )
}

const ListItem = styled.li({
    color: "#fff",
    padding: "0.8rem",
    ":hover":{
      color: "#B260EA",
      "a":{
        display: "block",
        color: "#B260EA",
        transition: "0.2s",
        cursor: "pointer",
        width: "100%",
      },
    },
    
    
})


export default InnerItems