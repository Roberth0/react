import './Card.css'

const Card = ({ photos }) => {
  return (
    <div>
      {photos.map(item => <img src={item.urls.regular} />)}
      {console.log(photos)}
    </div>
  )
}

export default Card

