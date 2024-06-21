import Header from "../Header/Header"
import style from "./App.module.css"
import Products from "../Products/Products"
import { useEffect, useState } from "react"
import Cart from "../Cart/Cart"
import { api } from "../../Api/Api"

export default function App() {

  const [products, setProducts] = useState([])
  const [viewCart, setViewCart] = useState(false)
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const response = await api.getProducts()
      setProducts(response.products)
    }
    getProducts()
  }, [])


  return <div className={style.wrapper}>
    <Header setViewCart={setViewCart} />
    <Cart viewCart={viewCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />
    <Products products={products} setCartProducts={setCartProducts}/>
  </div>
}

