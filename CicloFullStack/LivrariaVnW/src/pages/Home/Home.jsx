import S from './style.module.scss'
import justica from '../../assets/justica.svg'
import leitura from '../../assets/leitura.svg'
import comunidade from '../../assets/comunidade.svg'
import inspirar from '../../assets/inspirar.svg'

export default function Home(){
    return(
        <main>
            <section className={S.boxBanner}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.boxDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCardDoar}>
                    <article>
                        <img src={comunidade} alt="Integração Social" title='Integração Social'/>
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={leitura} alt="Estimular Leitura" title='Estimular Leitura'/>
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={inspirar} alt="Inspiração" title='Inspiração'/>
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={justica} alt="Igualdade" title='Igualdade'/>
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}