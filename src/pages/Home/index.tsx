import { Link } from "react-router-dom";
import Header from "../../components/Header"
import NoteIcon from "../../assets/icons/note-edit.svg";
import { Banner, BannerAction, BannerActionLink, BannerImageSection, BannerInfoSection, BannerInfoText, HomeContainer, HomeContent } from "./styles";

const Home = () => {
    return (
        <>
            <Header />
            <HomeContainer>
                <HomeContent>
                    <Banner>
                        <BannerInfoSection>
                            <BannerInfoText>
                                <h1>Quer planejar sua meta financeira de forma simples ?</h1>
                                <h2>Aqui você calcula e descobre o quanto precisa juntar por <b>mês</b> para alcançar sua meta na <b>data que você quiser.</b></h2>
                            </BannerInfoText>
                            <BannerAction>
                                <BannerActionLink to="/calculadora-metas/info-inicial" >
                                        Calcular sua Meta <img src={NoteIcon}/>
                                </BannerActionLink>
                            </BannerAction>
                        </BannerInfoSection>
                        <BannerImageSection>

                        </BannerImageSection>
                    </Banner>
                </HomeContent>
            </HomeContainer>

        </>

    )
}

export default Home;