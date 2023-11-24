import Header from "../../components/Header/Header"
import Product from "../../components/Product/Product"

const ProductPage = ({data}) => {

  return(
    <>
      <Header></Header>
      <Product data={data}></Product>
    </>
  )
}

export default ProductPage