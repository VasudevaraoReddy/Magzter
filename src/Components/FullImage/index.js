const FullImage = props => {
  const {list1} = props
  console.log(list1)
  return (
    <div>
      <img src={list1.url} alt="i" />
      <h1>{list1.title}</h1>
    </div>
  )
}

export default FullImage
