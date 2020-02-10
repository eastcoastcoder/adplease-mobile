import React from 'react';
import { List, ListItem } from 'react-onsenui';

import MyPage from '../components/MyPage';
import TimeList from './TimeList';

const DayList = ({ navigator }) => {
  const listViewData = getWeek();

  return (
    <MyPage headerOptions={{ title: 'Time Card' }}>
      <List
        dataSource={listViewData}
        renderRow={(row, idx) => (
          <ListItem
            key={idx}
            tappable
            onClick={() => navigator.pushPage({
              component: TimeList,
              props: {
                back: true,
                data: { startDate: new Date(), dayName: row, dayIdx: idx },
                },
              })}
          >
            <div style={{ paddingTop: 20, paddingBottom: 20 }} className="center">{row}</div>
          </ListItem>)}
      />
    </MyPage>
  );
};

const getWeek = () => {
  const todayDateObj = new Date();
  const zeroBasedDayOfWeek = todayDateObj.getDay();

  const dayLookups = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  for (let i = 1; i <= 7; i++) {
    const first = todayDateObj.getDate() - zeroBasedDayOfWeek + i;
    const dayObj = new Date(todayDateObj.setDate(first));
    if (zeroBasedDayOfWeek === i - 1) {
      dayLookups[i - 1] = `TODAY ${dayLookups[i - 1]}`;
    }
    dayLookups[i - 1] += ` (${dayObj.getMonth() + 1}/${dayObj.getDay()})`;
  }
  return dayLookups;
};

export default DayList;
