import Button from "../Button"

const ProductInfo = ({ cat, name, desc, cur, pre }) => {
    const button = {
        btnicon: "/assets/Button/icon-cart.svg",
        btntext: "Add to Cart", 
    }
    
    return(
    <div className='card__text'>
        <span className='category'>{cat}</span>
        <h2 className='name'>{name}</h2>
        <p className='description'>{desc}</p>
        <div className='price'>
            <span className='current'>{cur}</span>
            <span className="previous">{pre}</span>
        </div>
        <Button
        btnicon={button.btnicon}
        btntext={button.btntext}
        />
    </div>
    )
}

export default ProductInfo