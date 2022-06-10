import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type propsType = {
  lists: string[]
}

const InnerItems = (props: propsType) => {
  const lists: string[] = props.lists
  const items = lists.map((list) => {
    return (
      <ListItem key={list}>
        <Link href={'./'}>
        <p>{list}</p>
        </Link>
      </ListItem>
    )
  })
  return <>{items}</>
}

const ListItem = styled.li({
  color: '#fff',
  padding: '0.8rem',
  transition: '0.2s',
  ':hover': {
    color: '#B260EA',
    fontWeight: 'bold',
    // transform: "scaleZ(5)",
    // transformOrigin: "center",
    a: {
      display: 'block',
      color: '#B260EA',
      cursor: 'pointer',
      width: '100%',
    },
  },
})

export default InnerItems
