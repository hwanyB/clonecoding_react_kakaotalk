import React from 'react';
import styled from '@emotion/styled/macro';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt2, BiArrowBack } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Base = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 21px;
    right: 21px;
    height: 50px;
    box-sizing: border-box;
    padding: 10px 0 ;
`;

const Title = styled.h1`
    font-size: 20px;
    margin: 0;
    padding: 0;
    color: #ffd31a;
`;

const ActionItemContainer = styled.div`

`;
const ActionItem = styled.span`
    font-size: 20px;
    padding: 0 10px;
`;

interface Props {
    title: string;
}

const TopNavigation: React.FC<Props> = ({ title }) => {

    const navigate = useNavigate();

    return (
        <Base>
            <ActionItem onClick={() => navigate('/rooms', { replace: true })}>
                <BiArrowBack />
            </ActionItem>
            <Title>{title}</Title>
            <ActionItemContainer>
                <ActionItem>
                    <BiSearchAlt2 />
                </ActionItem>
                <ActionItem>
                    <GiHamburgerMenu />
                </ActionItem>
            </ActionItemContainer>
        </Base>
    )
}
export default TopNavigation;