import React from 'react'
import * as S from './styled'

export default function Footer() {
  return (
    <S.FooterBg>
      <S.FooterLogoBg>
        <S.FooterLogo />
        <h1>© McDonald’s 2024</h1>
      </S.FooterLogoBg>

      <S.FooterApp>
        <a href="/"><S.FooterPlayStore/></a>
        <a href="/"><S.FooterAppStore/></a>
      </S.FooterApp>
      
    </S.FooterBg>
  )
}
