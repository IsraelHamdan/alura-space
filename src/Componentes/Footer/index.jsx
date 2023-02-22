import React from 'react'
import twitter from'assets/rodape/twitter.svg'
import facebook from 'assets/rodape/facebook.svg'
import instagam from 'assets/rodape/instagram.svg'
import styles from './Rodape.module.scss'
export default function Footer() {
  return (
   <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
         <a href="https://www.facebook.com/AluraCursosOnline/">
            <img src={facebook} alt="" />
         </a>
         <a href="https://twitter.com/aluraonline?lang=en">
            <img src={twitter} alt="" />
         </a>
         <a href="https://www.instagram.com/aluraonline/?hl=en">
            <img src={instagam} alt="" />
         </a>
      </div>
      
      <p>Desenvolvido por Alura</p>
   </footer>
  )
}
