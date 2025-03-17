import Header from "../../components/Header"
import NoteIcon from "../../assets/icons/note-edit.svg";
import ReadingDoodle from "../../assets/images/reading-doodle.svg";
import SitReadingDoodle from "../../assets/images/sit-reading-doodle.svg";
import SprintingDoodle from "../../assets/images/sprinting-doodle.svg"
import {
    Banner,
    BannerAction,
    BannerActionLink,
    BannerImageSection,
    BannerInfoSection,
    BannerInfoText,
    CardImageContainer,
    CardTitleSection,
    Explanation,
    ExplanationCard,
    ExplanationCardsSection,
    ExplanationTitle,
    HomeContainer,
    HomeContent
} from "./styles";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <HomeContainer>
                <HomeContent>
                    <Banner>
                        <BannerInfoSection>
                            <BannerInfoText>
                                <h1>Quer <b>planejar</b> sua meta financeira de <b>forma rápida</b>  ?</h1>
                                <h2>Aqui você calcula e descobre o quanto precisa juntar por <b>mês</b> para alcançar sua meta na <b>data que você quiser.</b></h2>
                            </BannerInfoText>
                            <BannerAction>
                                <BannerActionLink to="/calculadora-metas/info" >
                                    Calcular Planejamento <img src={NoteIcon} alt="ícone de calcular a meta" />
                                </BannerActionLink>
                            </BannerAction>
                        </BannerInfoSection>
                        <BannerImageSection />
                    </Banner>
                    <Explanation>
                        <ExplanationTitle>
                            Como funciona
                        </ExplanationTitle>
                        <ExplanationCardsSection>
                            <ExplanationCard className="primary">
                                <CardImageContainer>
                                    <img src={ReadingDoodle} alt="ilustração de pessoa lendo" />
                                </CardImageContainer>
                                <CardTitleSection>
                                    <h2>
                                        <span>I</span><br/>
                                        Defina o quanto você tem e quando vai começar
                                    </h2>
                                    <p>
                                        Ex.: Tenho R$ 300,00 e vou começar a juntar dinheiro em <b>março</b>
                                    </p>
                                </CardTitleSection>
                            </ExplanationCard>

                            <ExplanationCard className="secondary">
                                <CardImageContainer>
                                    <img src={SitReadingDoodle} alt="ilustração de pessoa lendo sentada" />
                                </CardImageContainer>
                                <CardTitleSection>
                                    <h2>
                                        <span>II</span><br/>
                                        Defina o quanto você quer e quando você quer
                                    </h2>
                                    <p>
                                        Ex.: Quero R$ 3000 e quero ter este dinheiro em <b>dezembro</b>
                                    </p>
                                </CardTitleSection>
                            </ExplanationCard>
                            <ExplanationCard className="tertiary">
                                <CardImageContainer>
                                    <img src={SprintingDoodle} alt="ilustração de pessoa correndo" />
                                </CardImageContainer>
                                <CardTitleSection>
                                    <h2>
                                        <span>III</span><br/>
                                        Descubra o quanto precisa poupar
                                    </h2>
                                    <p>
                                        Ex.: Vou precisar juntar R$ 270 por mês para alcançar minha meta
                                    </p>
                                </CardTitleSection>
                            </ExplanationCard>
                        </ExplanationCardsSection>
                    </Explanation>
                </HomeContent>
            </HomeContainer>
            <Footer/>
        </>

    )
}

export default Home;