// return the userId data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem('userId');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the isLogged from the session storage
export const getToken = () => {
  return sessionStorage.getItem('isLogged') ? sessionStorage.getItem('userId') : null;
}

// remove the isLogged and userId from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('isLogged');
  sessionStorage.removeItem('userId');
}

// set the isLogged and userId from the session storage
export const setUserSession = (isLogged, userId) => {
  sessionStorage.setItem('isLogged', isLogged);
  sessionStorage.setItem('userId', userId);
}