/* eslint-disable  react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AlertContext = React.createContext(null);
AlertContext.displayName = 'AlertContext';

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState('NONE');
  const [alertText, setAlertText] = useState(null);

  return (
    <AlertContext.Provider
      value={{
        alert,
        alertText,
        success: (text) => {
          setAlertText(text);
          setAlert('SUCCESS');
          setTimeout(() => {
            setAlert('NONE');
          }, 3000);
        },
        error: (text) => {
          setAlertText(text);
          setAlert('ERROR');
          setTimeout(() => {
            setAlert('NONE');
          }, 3000);
        },
        clear: () => (setAlert('NONE')),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export { AlertProvider };
export default AlertContext;
