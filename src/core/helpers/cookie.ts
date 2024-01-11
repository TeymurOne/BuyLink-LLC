 export const getState = () => {
  let myToken: string | null = null;

  const cookieString: string = document.cookie;


  const cookies: string[] = cookieString.split('; ');

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === 'token') {
      myToken = cookieValue;
    }
  }
  if (myToken) {
    return myToken
  }
 

};
export default getState
