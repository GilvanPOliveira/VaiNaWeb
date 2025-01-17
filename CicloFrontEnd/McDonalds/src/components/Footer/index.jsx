import React from 'react'
import * as S from './style'

export default function index() {
  return (
    <S.FooterBg>
      <S.FooterLogo title="McDonald's">
        <S.FooterLogoImg />
        <h1>© McDonald’s 2024</h1>
      </S.FooterLogo>
      <S.FooterApp>
        <a href="/"><S.FooterPlayStore title='Baixe o App para Android'/></a>
        <a href="/"><S.FooterAppStore title='Baixe o App para iOS'/></a>
      </S.FooterApp>
    </S.FooterBg>
  )
}
