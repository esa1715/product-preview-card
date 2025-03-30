import Button from '../Button'
import ProductImage from '../ProductImage'
import ProductInfo from '../ProductInfo'
import './ProductCard.scss'

const ProductCard = () => {
    const product = {
        imgDesk: "/assets/Product/gabrielle-desktop.jpg",
        imgMob: "/assets/Product/gabrielle-mobile.jpg",
        cat: "P E R F U M E",
        name: "Gabrielle Essence Eau De Parfum",
        desc: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
        cur: "$149.99",
        pre: "$169.99",
    }

    return (
        <section className='Card'>
            <ProductImage imgDesk={product.imgDesk} imgMob={product.imgMob}/>
            <ProductInfo 
            cat={product.cat} 
            name={product.name} 
            desc={product.desc} 
            cur={product.cur} 
            pre={product.pre}
            />
        </section>
    )  
}

export default ProductCard