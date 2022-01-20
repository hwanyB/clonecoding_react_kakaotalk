import React from 'react';
import styled from '@emotion/styled/macro';
import { Global, css } from '@emotion/react';
import BottomNavigation from '../components/BottomNavigation';

const Base = styled.div``;

const Container = styled.div``;

const globalstyle = css`
    body {
        background-color: #ffeb9a;
    }
`;

const RoomDetail: React.FC = () => {
    return (
        <Base>
            <Global styles={globalstyle} />
            <Container>
                {/* <MessageList /> */}
            </Container>
            {/* <InputChat /> */}
        </Base>
    )
}

export default RoomDetail;
