import React, { useState } from 'react';
import styles from './Galeria.module.scss';
import Tags from 'Componentes/Tags';
import fotos from './fotos.json';

import Cards from './Cards';

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor)=> valor.tag))];
  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    })
    setItens(novasFotos)
  }
  return (
   <section className={styles.galeria}>
    <h2>Navegue pela galeria</h2>
    <Tags filtraFotos= {filtraFotos} tags = {tags}/>
    <Cards itens={itens} style={styles}/>
  </section>
  )
}
