import Link from 'next/link';

type itemType = {
  item:string[]
}
const Items = (props:itemType) => {
  const list = props.item.map((item)=>{
      return(
        <li key={item}>
          <Link href={""}>{item}</Link>
        </li>
      )
  })
  return (
    {list}
  )
}

export default Items