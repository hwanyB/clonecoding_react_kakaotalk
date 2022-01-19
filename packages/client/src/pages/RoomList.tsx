import React from 'react';
import styled from '@emotion/styled/macro';

import BottomNavigation from '../components/BottomNavigation';
import TopNavigation from '../components/TopNavigation';
import ChatRoomList from '../components/ChatRoomList';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import ChatRoom from '../components/ChatRoomList/ChatRoom';

const Base = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 21px;
    box-sizing: border-box;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const RoomList: React.FC = () => {
    const { data: ChatRoomListData } = useQuery<AxiosResponse<Array<Iroom>>, AxiosError>('fetchChatRoomList', fetchChatRoomList);
    return (
        <Base>
            <Container>
                <TopNavigation title='채팅'/>
                {
                    ChatRoomListData && (
                        <ChatRoomList>
                            {
                                ChatRoomListData.data.map(chatRoom => (
                                    <ChatRoom
                                    key={chatRoom.id}
                                    id={chatRoom.id}
                                    username={chatRoom.user.username}
                                    />
                                ))
                            }
                        </ChatRoomList>
                    )
                }
                <BottomNavigation />
            </Container>
        </Base>
    )
}

export default RoomList;
