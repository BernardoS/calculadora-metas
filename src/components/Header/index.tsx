import { HeaderContainer, HeaderContent, LogoContainer, NavBar, NavItem } from "./styles";
import HeaderLogo from "../../assets/images/header-logo.png";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <img src={HeaderLogo} aria-label="Calculadora de Metas"/>
                </LogoContainer>
                <NavBar>   
                    <NavItem to="/calculadora-metas">Home</NavItem>
                    <NavItem to="/calculadora-metas/info">Calculadora</NavItem>
                </NavBar>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header;