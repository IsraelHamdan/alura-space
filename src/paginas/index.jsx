import Cabecalho from "../Componentes/Cabecalho";
import Footer from "../Componentes/Footer";
import Galeria from "../Componentes/Galery";
import Menu from "../Componentes/Menu";
import Banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
   return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={Banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
      </main>
      <div>
        <Galeria/>
      </div>
      <Footer/>
    
    </>
   )
}