import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { useTheme } from '@emotion/react';
import { useMutation } from 'react-query';
import { login } from '../apis/userApi';
import { useNavigate } from 'react-router-dom';
import logo from '../kkokkiotalk_logo.png';


const Base = styled.div<{ backgroundColor: string}>`
    width: 100%;
    height: 100vh;
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 0 21px;
    box-sizing: border-box;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoWrapper = styled.div`
    width: 214px;
    object-fit: contain;
    margin: 158px 0;
`;
const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const InputWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;
const Input = styled.input<{ backgroundColor: string}>`
    margin: 0;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    padding: 0 21px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${({ backgroundColor }) => backgroundColor};

`;
const ButtonWrapper = styled.div`
    margin-top: 36px;
`;
const Button = styled.button<{ backgroundColor: string}>`
    margin: 0;
    padding: 0;
    border: none;
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: 100%;
    height: 43px;
    font-size: 16px;
    font-weight: 600;
    &:active {
        opacity: 0.7;
    }
`;


const Lobby: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const mutation = useMutation((username: string) => login({ username }));

    const [username, setUsername] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleLogin = () => {
        mutation.mutate(username, {
            onSuccess: (data) => {
                if (data.statusText === 'OK'){
                    navigate('/friends');
                }
            }
        })
    }

    return (
        <Base backgroundColor={theme.colors.primary}>
            <Container>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>
                <InputWrapper>
                    <Input onChange={handleChange} placeholder='이름을 입력하세요.' backgroundColor={theme.colors.secondary} />
                </InputWrapper>
                <ButtonWrapper>
                    <Button onClick={handleLogin} backgroundColor={theme.colors.white}>로그인</Button>
                </ButtonWrapper>
            </Container>
        </Base>
    )
}

export default Lobby;
