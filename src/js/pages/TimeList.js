import React, { useState, useEffect, useContext } from 'react';
import { Button, Icon } from 'react-onsenui';

import MyPage from '../components/MyPage';
import SwipeableList from '../components/SwipeableList/SwipeableList';
import SwipeableListItem from '../components/SwipeableList/SwipeableListItem';
import TimeEntry from './TimeEntry';
import GlobalContext from '../contexts/GlobalContext';

const background = (
  <Icon
    size={{ default: 32, material: 40 }}
    icon={{ default: 'ion-ios-trash-outline' }}
  />);

const TimeList = ({ navigator, data: { dayName, dayIdx } }) => {
  const [loading, setLoading] = useState([]);
  const { timeSheet, setItem } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MyPage headerOptions={{
      title: `Time Entries for ${dayName}`,
      add: true,
      back: true,
      rightCallback: () => navigator.pushPage({ component: TimeEntry, props: { back: true } }) }}
    >
      {loading
        ? 'Now Loading, please wait'
        : (
          <SwipeableList>
            {timeSheet[dayIdx].map((value, idx) => (
              <SwipeableListItem background={background} key={idx} onClick={() => navigator.pushPage({ component: TimeEntry, props: { back: true, data: { startDate: new Date() } } })}>
                <Button modifier="quiet" style={{ color: 'black' }}>
                  <div className="ItemContent">{`${value.startTime} - ${value.endTime}`}</div>
                </Button>
              </SwipeableListItem>))}
          </SwipeableList>)}
    </MyPage>
  );
};

export default TimeList;
