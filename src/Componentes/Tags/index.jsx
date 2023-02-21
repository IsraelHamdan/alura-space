import React from 'react'
import styles from './Tags.module.scss'
export default function Tags() {
  return (
    <div className={styles.tags}>
      <p className={styles.tags__p}>Filtre por tags</p>
      <ul className={styles.tags__lista}>
         <li className={styles.tags__li}>Estrelas</li>
         <li className={styles.tags__li}>Galaxias</li>
         <li className={styles.tags__li}>Lua</li>
         <li className={styles.tags__li}>Planetas</li>
      </ul>
    </div>
  )
}
