import React from 'react'
import CharModel from '../../components/CharModel'
import json from '../../json/characters.json'
import { Route, Routes, useParams } from 'react-router-dom'
import PaginaPrincipal from '../../components/PaginaPadrao'
import ScrollToTop from '../../components/ScrollToTop'
import NotFound from '../NotFound'

export default function CharInfo() {
  const parametro = useParams()
  const char = json.characters.find((char) => {
    return (
      char.id === parametro.id
    )
  })

  if (!char) {
    return <NotFound />
  }
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='*' element={<PaginaPrincipal />}>
          <Route index element={<CharModel
            image={`../public/../${char.img}`}
            key={char.id}
            power={char.attack}
            defense={char.defense}
            health={char.health}
            kiRestore={char.kiRestoreSpeed}
            bio={char.bio}
            charName={char.name}
            skills={char.abilities}>
          </CharModel>} />
        </Route>
      </Routes></>
  )
}
