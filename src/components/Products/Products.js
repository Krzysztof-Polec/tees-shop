import { Link } from "react-router-dom"
import "./Products.scss"

const Products = ({data}) => {
  const displayProducts = data.map(product => <Link to={`/${product.name.replace(/\s+/g, "-")}`} key={product.id}><img src={product.image} alt={product.image}></img></Link>)

  return(
    <div className="products">
      {displayProducts}
    </div>
  )
}

export default Products