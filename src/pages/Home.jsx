import "./HomeStyle.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect} from "react";

const Home = () => {
    const tl = gsap.timeline({duration: 1});
  useEffect(() => {

    function animarTitles(element, startX, endX) {
      tl.fromTo(element, {
        opacity: 0,
        x: startX,
      }, {
        opacity:1,
        x: endX,
      })
    }


    animarTitles('.text-title-h1', -200, 0);
    animarTitles('.text-p', 200, 0);
    animarTitles('.btn', 200, 0);




  }, [])

  return (
    <div className="container-Home">
      <div className="title-text">
        <h1 className="text-title-h1">Seja muito bem-vinda, meu amor. Que esse simples gesto possa expressar todo o meu carinho, admiração e amor por você neste dia tão especial.</h1>
        <p className="text-p" style={{fontSize: '1.2em'}}>Nestes 4 anos juntos, tenho visto a força, a graça e a bondade que você carrega consigo. Cada momento, seja ele doce ou desafiador, fortaleceu nossos laços e solidificou o amor que compartilhamos. Agradeço a Deus por ter você ao meu lado, por todos os sorrisos compartilhados e por cada obstáculo que superamos juntos. Este é apenas o começo da nossa jornada, e sei que ainda há muitos capítulos de felicidade aguardando para serem escritos. Feliz aniversário, meu amor, e que este seja apenas o inicio de um ano repleto de alegrias e realizações para você.</p>
      </div>
      <div className="btn-container">
        <Link className="btn" to={"/content"}>
          Vamos lá
        </Link>
      </div>
    </div>
  );
};

export default Home;
