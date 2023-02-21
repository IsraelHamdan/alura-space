import React from 'react'
import styles from './Menu.module.scss'
import icones from './icone.json'
import Icone from './icones'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
      {icones.map(icone => (<Icone key={icone.id} icone={icone} style={styles} />))}
      </ul>
    </nav>  
   )
}