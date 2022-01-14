import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import UserInfo from '../components/SeeMore/UserInfo';
import TopNavigation from '../components/TopNavigation';

const SeeMore: React.FC = () => {
    return (
        <div>
            <TopNavigation title='더보기' />
            <UserInfo telNo='010-3050-3337' username='변환희' />
            <BottomNavigation />
        </div>
    )
}

export default SeeMore;
