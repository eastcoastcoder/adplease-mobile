import React from 'react';
import { List, ListItem } from 'react-onsenui';

import MyPage from '../components/MyPage';

const Settings = () => {
  const listViewData = [
    {
      key: 'onExportPressed',
      callback: () => onExportPressed(),
      displayItems: ['Export Timesheet'],
      type: 'alert',
    },
    {
      key: 'onDataClear',
      callback: () => onDataClear(),
      displayItems: ['Clear Data'],
      type: 'alert',
    },
  ];

  const onExportPressed = () => {
    // TODO: Call Alert Prompt
    // Prompt Download OR Email
    // Gather data
    // Do action
  };

  const onDataClear = () => {
    // TODO: Call Alert Prompt
    localStorage.clear();
    window.location.reload();
  };

  const _renderRow = row => (
    <ListItem key={row.key} tappable onClick={row.callback}>
      <div className="center">{row.displayItems}</div>
    </ListItem>
  );

  return (
    <MyPage headerOptions={{ title: 'Settings' }}>
      <List dataSource={listViewData} renderRow={_renderRow} />
    </MyPage>
  );
};

export default Settings;
