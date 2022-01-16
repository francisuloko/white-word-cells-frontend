import { useContext } from 'react';
import AlertContext from './AlertProvider';

const Alert = () => {
  const alert = useContext(AlertContext);

  if (alert.alert !== 'NONE') {
    return (
      <p className="p-2 mb-0 bg-success text-white text-center w-100">
        {alert.alertText}
      </p>
    );
  }
  return null;
};

export default Alert;
