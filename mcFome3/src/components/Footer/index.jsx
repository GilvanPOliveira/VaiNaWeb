import React from 'react'
import * as S from './style'

export default function index() {
  return (
    <S.FooterBg>
      <S.FooterLogo>
        <S.FooterLogoImg />
        <h1>© McDonald’s 2024</h1>
      </S.FooterLogo>
      <S.FooterApp>
        <a href="/"><S.FooterPlayStore /></a>
        <a href="/"><S.FooterAppStore /></a>
      </S.FooterApp>
    </S.FooterBg>
  )
}
