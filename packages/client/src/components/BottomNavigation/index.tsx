import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { Link } from 'react-router-dom';

import { BiUser } from 'react-icons/bi';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineEllipsis } from 'react-icons/ai';

const Base = styled.nav<{ backgroundColor: string; }>`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    box-shadow: 1px -2px 10px rgba(42, 42, 42, 0.1);
    background-color: ${({backgroundColor }) => backgroundColor};
`;

const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const NavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NavButton = styled.button`
    font-size: 24px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
`;


const BottomNavigation: React.FC = () => {
    const theme = useTheme();
    return (
        <Base backgroundColor={theme.colors.primary}>
            <NavList>
                <NavItem>
                    <Link to='/friends'>
                        <NavButton>
                            <BiUser />
                        </NavButton>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/rooms'>
                        <NavButton>
                            <BsChatDots />
                        </NavButton>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='more'>
                        <NavButton>
                            <AiOutlineEllipsis />
                        </NavButton>
                    </Link>
                </NavItem>
            </NavList>
        </Base>
    )
}

export default BottomNavigation;