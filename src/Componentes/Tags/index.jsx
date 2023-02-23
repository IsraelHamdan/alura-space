import React from 'react'
import styles from './Tags.module.scss'
export default function Tags({tags, filtraFotos}) {
  return (
    <div className={styles.tags}>
      <p className={styles.tags__p}>Filtre por tags</p>
      <ul className={styles.tags__lista}>
         {
            tags.map((tag)=>{
              return (
                <li 
                  className={styles.tags__li} key={tag} onClick={filtraFotos(tag)}>{tag}
                </li> 
  
              )
            })
         }
      </ul>
    </div>
  )
}
