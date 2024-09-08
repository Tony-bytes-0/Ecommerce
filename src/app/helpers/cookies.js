import Cookies from 'js-cookie';

export const setSessionCookie = (sessionData, options = {}) => {
  const { token, userData } = sessionData;
  const sessionObject = { token, userData };
  const serializedData = JSON.stringify(sessionObject);
  const defaultOptions = { expires: 7 }; // Opciones predeterminadas
  const finalOptions = { ...defaultOptions, ...options };
  Cookies.set('sessionData', serializedData, finalOptions);
};

export const getSessionData = () => {
  const serializedData = Cookies.get('sessionData');
  if (!serializedData) return null;
  console.log('waos, dentro de una galleta', serializedData)
  const data = JSON.parse(serializedData);
  return data; // Retorna un objeto con token y userData
};

export const removeSessionCookie = () => {
  Cookies.remove('sessionToken');
};