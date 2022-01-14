import React from 'react';
import styled from '@emotion/styled/macro';
import { useTheme } from '@emotion/react';

const Base = styled.div`
    display: flex;
    margin: 0 21px;
    margin-top: 50px;
    border-bottom: 1px solid #ffeb9a;
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 21px;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;
    margin-left: 20px;
    justify-content: center;
`;
const Username = styled.p<{ color: string}>`
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: ${({ color }) => color};
`;
const PhoneNumber = styled.p<{ color: string}>`
    font-size: 14px;
    font-weight: 200;
    margin: 0;
    padding: 0;
    color: ${({ color }) => color};
`;

interface Props {
    username: string;
    telNo: string;
}

const UserInfo: React.FC<Props> = ({ username, telNo }) => {
    const theme = useTheme();
    return (
        <Base>
            <ImageWrapper>
                <Image src="/placeholder.png" />
            </ImageWrapper>
            <Info>
                <Username color={theme.colors.gray[100]}>{username}</Username>
                <PhoneNumber  color={theme.colors.gray[100]}>{telNo}</PhoneNumber>
            </Info>
        </Base>
    )
}

export default UserInfo;