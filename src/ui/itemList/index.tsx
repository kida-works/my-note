import styled from "styled-components";

type propsType = {
  items: string[] 
}

const ItemLists = (props:propsType) =>{

  const lists = props.items.map((item)=>{
    return(
      <li key={item}>{item}</li>
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
    transition: "0.2s",
    cursor: "pointer",
    ":hover":{
      color: "#B260EA",
    }
  }
})

export default ItemLists;