import style from "./Header.module.css"


export default function Header({setViewCart}) {
    return <header>
        <h1>Shop</h1>
        <div className={style.container}>
            <button className={style.button} onClick={() => setViewCart((prev) => !prev )}>Cart</button>
        </div>
    </header>
}