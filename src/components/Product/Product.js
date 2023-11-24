import { useState } from "react"
import { useParams } from "react-router-dom"
import "./Product.scss"

const Product = ({ data }) => {
  const { productName } = useParams()
  const [selectedSize, setSelectedSize] = useState(null)

  const product = data.find((p) => p.name.replace(/\s+/g, "-") === productName)

  const handleSizeClick = (size) => {
    setSelectedSize(size)
  }

  const productSizes =
    product &&
    product.sizes.map((size) => (
      <button
        key={size.size}
        value={size.size}
        className={selectedSize === size.size ? "active" : ""}
        onClick={() => handleSizeClick(size.size)}
      >
        {size.size}
      </button>
    ))

  return(
    <div className="product-details">
      <div className="product-left-column">
        {product && (
          <img src={product.image} alt={product.name}></img>
        )}
      </div>
      <div className="product-right-column">
        <div className="product-name">
          <p>{product && product.name}</p>
        </div>
        <div className="product-price">
          <p>
            Aktualna cena:
            <br></br>
            {product && product.price}
          </p>
        </div>
        <div className="product-sizes">
          <p>Wybierz rozmiar</p>
          {productSizes}
        </div>
        <div className="product-add-to-cart">
          <button>Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  )
}

export default Product