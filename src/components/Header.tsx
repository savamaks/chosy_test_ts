import styled from "styled-components";
import arrow from "../icons/Arrow.svg";
import ok from "../icons/ok.svg";

const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
`;
const Button = styled.button`
    margin: 0 30px;
    cursor: pointer;
`;
const Text = styled.p`
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.01em;
    color: #a4a5ae;
`;

const Header = (): JSX.Element => {
    return (
        <HeaderContainer>
            <Button>
                <img src={arrow} alt="" />
            </Button>
            <Text>Фотография профиля</Text>
            <Button>
                <img src={ok} alt="" />
            </Button>
        </HeaderContainer>
    );
};

export default Header;
