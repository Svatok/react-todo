export const deleteTokenFromCookies = () => {
  document.cookie = 'access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
