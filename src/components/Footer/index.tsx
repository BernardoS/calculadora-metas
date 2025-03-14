import { ContactSection, FooterContainer, FooterContent, InfoSection, LogoSection, LogoSectionMobile } from "./styles";
import HeaderMobileLogo from "../../assets/images/header-mobile-logo.png";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LogoSectionMobile>
                    <img src={HeaderMobileLogo} aria-label="Calculadora de Metas" />
                </LogoSectionMobile>
                <InfoSection>
                    <h3>
                        Informações
                    </h3>
                    <p>
                        Desenvolvido por <a href="https://github.com/BernardoS" >BernardoS</a>
                    </p>
                    <p>
                        Artes disponíveis em <a href="https://opendoodles.com" >opendoodles.com</a>
                    </p>
                </InfoSection>
                <LogoSection>
                    <img src={HeaderMobileLogo} aria-label="Calculadora de Metas" />
                </LogoSection>
                <ContactSection>
                    <h3>
                        Contatos
                    </h3>
                    <p>
                        Email: <a href="mailto:bernardo.sfs27@gmail.com" >bernardo.sfs27@gmail.com</a>
                    </p>
                    <p>
                        LinkedIn: <a href="https://www.linkedin.com/in/bernardo-souza-ferreira-33b4a525b/" >Bernardo Souza Ferreira</a>
                    </p>
                </ContactSection>
            </FooterContent>
        </FooterContainer>
    )
}
export default Footer;