import React, { useState } from 'react';

import GlobalContext from './GlobalContext';
import useEffectAsync from '../util/useEffectAsync';

const GlobalProvider = ({ children }) => {
  const [context, setContext] = useState({
    loading: false,
    timeSheet: {
      0: [{
        startTime: '8:20AM',
        endTime: '8:30AM',
      }, {
        startTime: '8:20AM',
        endTime: '8:45AM',
      }, {
        startTime: '8:45AM',
        endTime: '9:00AM',
      }, {
        startTime: '9:00AM',
        endTime: '12:00PM',
      }, {
        startTime: '1:00PM',
        endTime: '5:00PM',
      }],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    },
  });

  useEffectAsync(async () => {
    // Do some fetch
    setContext(prevContext => ({
      ...prevContext,
      loading: false,
    }));
  }, []);

  const setItem = (key, value) =>
    setContext(prevContext => ({ ...prevContext, [key]: value }));

  return (
    <GlobalContext.Provider
      value={{
        ...context,
        setItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
