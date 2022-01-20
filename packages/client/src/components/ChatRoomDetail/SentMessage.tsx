import React from 'react';
import styled from '@emotion/styled/macro';
import { useTheme } from '@emotion/react';
import { MessageType } from './MessageList';

const Base = styled.li`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 100%;
`;

const SpeechBubble = styled.span<{ backgroundColor: string }>`
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: 15px 0 15px 15px;
    margin-left: 5px;
    padding: 13px;
    font-size: 18px;
`;

const SentAt = styled.span`
    font-size: 12px;
    opacity: 0.8;
`;

interface Props extends MessageType {
    // receiver: string;
}
const SentMessage: React.FC<Props> = ({ content, timestamp }) => {
    const theme = useTheme();
    return (
        <Base>
            <SpeechBubble backgroundColor={theme.colors.primary}>
                {content}
            </SpeechBubble>
            <SentAt>{timestamp}</SentAt>
        </Base>
    )
}
export default SentMessage;