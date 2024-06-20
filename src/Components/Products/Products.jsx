import style from "./Products.module.css"


export default function Products({ products, setCartProducts }) {
    return <div className={style.container}>
        <h1>Products</h1>
        <section className={style.products}>
            {products.map((product, index) => {
                return <div key={index} className={style.product}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p className={style.product__price}>{product.price}$</p>
                    <img src={product.thumbnail} alt={product.title} />
                    <button className={style.button} onClick={() => setCartProducts((prev) => [...prev, product])}>Add to cart</button>
                </div>
            })}
        </section>
    </div>
}