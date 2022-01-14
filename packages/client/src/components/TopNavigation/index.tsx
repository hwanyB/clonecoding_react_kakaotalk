import React from 'react';
import styled from '@emotion/styled/macro';

import { BiSearchAlt2 } from 'react-icons/bi';
import { RiChatNewLine } from 'react-icons/ri';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';

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
    /* background-color: #222; */
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
    return (
        <Base>
            <Title>{title}</Title>
            <ActionItemContainer>
                <ActionItem>
                    <BiSearchAlt2 color='#ffd31a' />
                </ActionItem>
                <ActionItem>
                    <RiChatNewLine color='#ffd31a' />
                </ActionItem>
                <ActionItem>
                    <HiOutlineMusicNote color='#ffd31a' />
                </ActionItem>
                <ActionItem>
                    <AiOutlineSetting color='#ffd31a' />
                </ActionItem>
            </ActionItemContainer>
        </Base>
    )
}


export default TopNavigation;