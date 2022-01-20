import React, { useRef, useState } from 'react';
import styled from '@emotion/styled/macro';

import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { useTheme } from '@emotion/react';

const Base = styled.div<{ backgroundColor: string }>`
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    box-shadow: 1px -2px 5px rgba(42, 42, 42, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 4px 21px;
`;

const PlusButtonWrapper = styled.div``;

const PlusButton = styled.button`
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: none;
    background-color: transparent;
`;

const InputWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Input = styled.input<{ backgroundColor: string }>`
    border: none;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 18px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 4px 8px;
    font-size: 16px;
`;

const SendButtonWrapper = styled.div`
    margin-left: 10px;
    box-sizing: border-box;
`;

const SendButton = styled.button<{ backgroundColor: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    font-size: 16px;
    &:active {
        opacity: 0.7;
    }
`;

interface Props {
    onClick(content: string): void;
}


const InputChat: React.FC<Props> = ({ onClick }) => {
    
    const theme = useTheme();

    const inputRef = useRef<HTMLInputElement>(null);

    const [content, setContent] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    };

    const handleClick = () => {
        onClick(content);

        setContent('');

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    
    return (
        <Base
            backgroundColor={theme.colors.primary}
        >
            <PlusButtonWrapper>
                <PlusButton>
                    <BsPlusSquare />
                </PlusButton>
            </PlusButtonWrapper>
            <InputWrapper>
                <Input
                    ref={inputRef}
                    onChange={handleChange}
                    backgroundColor={theme.colors.white}
                />
            </InputWrapper>
            <SendButtonWrapper>
                <SendButton
                    onClick={handleClick}
                    backgroundColor={theme.colors.primary}
                >
                    <AiOutlineArrowUp />
                </SendButton>
            </SendButtonWrapper>
        </Base>
    )
}
export default InputChat;