import './index.css'

const EachRow = props => {
  const {eachRow, onClickEachThumbNail} = props
  const {thumbnailUrl, id} = eachRow
  const onClickEach = () => {
    onClickEachThumbNail(eachRow)
  }
  return (
    <li className="each-row" onClick={onClickEach}>
      <p>{id}.</p>
      <img className="thumbnail" src={thumbnailUrl} alt={id} />
    </li>
  )
}

export default EachRow
