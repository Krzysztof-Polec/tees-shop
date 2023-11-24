import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import HomePage from "../../Pages/HomePage/HomePage"
import ProductPage from "../../Pages/ProductPage/ProductPage"

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get("/products.json")
        setProducts(response.data.tees)
      }catch{
        console.error("cos poszlo nie tak")
      }
    }

    fetchData()
  },[])

  return(
    <Router>
      <Routes>
        <Route index element={<HomePage data={products}></HomePage>}></Route>
        <Route path="/:productName" element={<ProductPage data={products}></ProductPage>}></Route>
      </Routes>
    </Router>
  )
}

export default Shop