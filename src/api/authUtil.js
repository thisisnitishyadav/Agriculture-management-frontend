// save token and userId in localStorage
export const saveUserData = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  };
  
  // retrieve token and userId from localStorage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const getUserId = () => {
    return localStorage.getItem('userId');
  };
  
  // delete token and userId from localStorage (logout)
  export const removeUserData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };
  