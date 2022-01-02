const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: user.accessToken };
  }
  return {};
};

export default authHeader;
