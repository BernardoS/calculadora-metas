import { DesktopContent, HeaderContainer, HeaderContent, LogoContainer, LogoImage, MenuButtonContainer, MobileContent, MobileLogoContainer, NavBar, NavItem } from "./styles";
import HeaderLogo from "../../assets/images/header-logo.png";
import HeaderMobileLogo from "../../assets/images/header-mobile-logo.png";
import MenuIcon from "../../assets/icons/menu.svg";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <DesktopContent>
                    <LogoContainer>
                        <LogoImage src={HeaderLogo} aria-label="Calculadora de Metas" />
                    </LogoContainer>
                    <NavBar>
                        <NavItem to="/calculadora-metas">Home</NavItem>
                        <NavItem to="/calculadora-metas/info">Calculadora</NavItem>
                    </NavBar>
                </DesktopContent>
                <MobileContent>
                    <MenuButtonContainer>
                        <button >
                            <img alt="Ícone do menu hamburguer" src={MenuIcon} />
                        </button>
                    </MenuButtonContainer>
                    <MobileLogoContainer>
                        <img src={HeaderMobileLogo} aria-label="Calculadora de Metas"  />
                    </MobileLogoContainer>
                </MobileContent>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header;