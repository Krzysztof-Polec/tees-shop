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

  console.log(selectedSize)

  const productSizes =
    product &&
    product.sizes.map((size) => (
      <button
        key={size.size}
        value={size.size}
        className={selectedSize && selectedSize.size === size.size ? "active" : ""}
        onClick={() => handleSizeClick(size)}
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
        {selectedSize && selectedSize.amount < 10 
        ? 
        <div className="product-amout">
          <p>Pozostało tylko {selectedSize.amount} ostatnich sztuk</p>  
        </div>
        : null}
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