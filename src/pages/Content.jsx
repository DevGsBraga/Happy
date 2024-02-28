// import { Link } from "react-router-dom"
import Card1 from '../Card1/CardRight';
import foto from '../assets/imgs/teste1.png'

const Content = () => {
  return (
    <div>
        <div>
        <Card1 title={'Primeira Viagem'} imagem={foto} text='Nossa primeira viagem juntos foi para o Francês. Ficamos hospedados em uma casa a 100 metros da praia. Foi uma viagem muito boa e inesquecível, cheia de lembranças maravilhosas daquele lugar. Tudo fica perfeito com a pessoa certa. Ah, aquele Sandero. Saudades!' src={'/content2'} />
        </div>
    </div>
  )
}

export default Content
