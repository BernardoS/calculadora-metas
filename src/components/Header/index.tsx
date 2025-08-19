import { CloseButtonContainer, DesktopContent, DrawerCloseButton, DrawerContainer, DrawerContent, DrawerHeader, DrawerLogo, DrawerOption, DrawerOptions, HeaderContainer, HeaderContent, LogoContainer, LogoImage, MenuButtonContainer, MobileContent, MobileLogoContainer, NavBar, NavItem } from "./styles";
import HeaderLogo from "../../assets/images/header-logo.png";
import HeaderMobileLogo from "../../assets/images/header-mobile-logo.png";
import MenuIcon from "../../assets/icons/menu.svg";
import MenuCloseIcon from "../../assets/icons/menu-close.svg";
import HomeIcon from "../../assets/icons/home.svg";
import CalculatorIcon from "../../assets/icons/calculator.svg";
import { useState } from "react";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <HeaderContainer>
            <HeaderContent>
                <DesktopContent>
                    <LogoContainer to="/calculadora-metas">
                        <LogoImage src={HeaderLogo} aria-label="Calculadora de Metas" />
                    </LogoContainer>
                    <NavBar>
                        <NavItem to="/calculadora-metas">Home</NavItem>
                        <NavItem to="/calculadora-metas/info">Calculadora</NavItem>
                    </NavBar>
                </DesktopContent>

                <MobileContent>
                    <MenuButtonContainer>
                        <button onClick={() => setOpen(true)}>
                            <img alt="Ícone do menu hamburguer" src={MenuIcon} />
                        </button>
                    </MenuButtonContainer>
                    <MobileLogoContainer to="/calculadora-metas">
                        <img src={HeaderMobileLogo} aria-label="Calculadora de Metas" />
                    </MobileLogoContainer>

                    <DrawerContainer className={open ? "open" : ""}>
                        <DrawerContent className={open ? "open" : ""}>
                            <DrawerHeader>
                                <DrawerLogo aria-label="Calculadora de Metas" src={HeaderMobileLogo} />
                                <CloseButtonContainer>
                                    <DrawerCloseButton onClick={() => setOpen(false)}>
                                        <img alt="Ícone de fechar o menu" src={MenuCloseIcon} />
                                    </DrawerCloseButton>
                                </CloseButtonContainer>

                            </DrawerHeader>
                            <DrawerOptions>
                                <DrawerOption onClick={() => setOpen(false)} to="/calculadora-metas">
                                    <img src={HomeIcon} alt="Ícone da home" />
                                    Home
                                </DrawerOption>
                                <DrawerOption onClick={() => setOpen(false)} to="/calculadora-metas/info">
                                    <img src={CalculatorIcon} alt="Ícone da calculadora" />
                                    Calculadora
                                </DrawerOption>
                            </DrawerOptions>
                        </DrawerContent>
                    </DrawerContainer>

                </MobileContent>
            </HeaderContent>

        </HeaderContainer>
    )
}

export default Header;