import style from "./Cart.module.css"

import { useEffect, useState } from "react"

export default function Cart({ viewCart, cartProducts, setCartProducts }) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cartProducts.reduce((acc, product) => acc + product.price, 0))
    }, [cartProducts])


    return <div className={style.container + " " + (viewCart ? style.active : "")}>
        <div className={style.container__products}>
            {cartProducts.map((product, index) => {
                return <div key={index} className={style.product}>
                    <h2>{product.title}</h2>
                    <p>{product.price}$</p>
                    <button onClick={() => setCartProducts(cartProducts.filter((_, i) => i !== index))}>X</button>
                </div>
            })}
        </div>
        <div className={style.options}>
            <p>Total: {total.toFixed(2)}$</p>
            <button>Create Order</button>
        </div>
    </div>
}