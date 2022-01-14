import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import TopNavigation from '../components/TopNavigation';

const Friends: React.FC = () => {
    return (
        <div>
            <TopNavigation title='친구' />
            Friends
            <BottomNavigation />
        </div>
    )
}

export default Friends;
