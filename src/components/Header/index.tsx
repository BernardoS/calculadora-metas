import { HeaderContainer, HeaderContent, LogoContainer, NavBar, NavItem } from "./styles";
import HeaderLogo from "../../assets/header-logo.png";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <img src={HeaderLogo} />
                </LogoContainer>
                <NavBar>   
                    <NavItem to="/calculadora-metas">Home</NavItem>
                    <NavItem to="/calculadora-metas/info-inicial">Calculadora</NavItem>
                </NavBar>
            </HeaderContent>

        </HeaderContainer>
    )
}

export default Header;