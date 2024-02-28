import "./CardRightStyle.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardRight = ({title, imagem, text, src }) => {

  return (
    <>
    <div className="container-card-right">
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
        </div>
      <div className="card mb-3">
        <img src={imagem} className="img-size" alt="..." />
      </div>
      <div className="card-p">
          <p style={{width: '70rem', textAlign: 'center', fontSize: '1.5em'}} className="card-text">{text}</p>
      </div>
    </div>
    <div>
      <Link className="btn" to={src}>Próximo</Link>
    </div>

    </>
  );
};

export default CardRight;
