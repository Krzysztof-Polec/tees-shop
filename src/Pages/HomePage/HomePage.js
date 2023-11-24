import Header from "../../components/Header/Header"
import Products from "../../components/Products/Products"
import "./HomePage.scss"

const HomePage = ({data}) => {
  return(
    <>
      <div className="home-page-header">
        <Header></Header>
      </div>
      
      <Products data={data}></Products>
    </>
  )
}

export default HomePage