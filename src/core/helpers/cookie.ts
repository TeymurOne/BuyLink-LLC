


 
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


export const setCokkie=(token:any)=>{
  
  const expires = new Date();
  expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
  document.cookie = `token=${token
  };expires=${expires.toUTCString()};path=/`;
}