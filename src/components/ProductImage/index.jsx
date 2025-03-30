const ProductImage = ({ imgMob, imgDesk }) => {
    return (
        <>
            <div className="img__desk">
                <img src={imgDesk} alt="Imagem do Produto" />
                </div>
            <div className="img__mob">
                <img src={imgMob} alt="Imagem do Produto" />    
            </div>
        </>
    )
}

export default ProductImage;