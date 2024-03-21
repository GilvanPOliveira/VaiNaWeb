import React from 'react'
import * as S from './style'

export default function index() {
  return (
    <S.HeaderBg>
      <S.HeaderLogoImg />
    <S.HeaderApp>
      <S.HeaderDownload>  
        <S.HeaderAppIcon />
        <h1>Baixe o app</h1>
      </S.HeaderDownload>
      <S.HeaderPedidos> 
        <a href="/"><h1>Peça seu Méqui</h1></a>  
        <S.HeaderEncomendaApp />
      </S.HeaderPedidos>
    </S.HeaderApp>
  </S.HeaderBg>
  )
}
