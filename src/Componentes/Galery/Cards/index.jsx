import React from 'react'

import Card from './Card'
export default function Cards({itens, style}) {
   return (
     <Card key ={itens.id}itens={itens} style={style}/>
   )
}
