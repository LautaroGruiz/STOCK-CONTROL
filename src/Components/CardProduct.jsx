import "../Style/CardProduct.css";
import media from "../Image/CARDS-ILUSTRATOR/medias.png";

const CardProduct = () => {
  return (
    <div className="cardProductStock">
      <div className="imgBx">
        <img src={media} />
      </div>
      <div className="contentBx">
        <h2 id="nombreDeProducto">Pack Medias Nike X3</h2>
        <div className="datesDeProducts">
          <h3 className="price">Precio: $3.000</h3>
          <h3 className="price">Stock: 5</h3>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
