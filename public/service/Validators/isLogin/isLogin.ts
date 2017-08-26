const loginRegular: RegExp = /^[a-zA-Z](.[ a-zA-Z0-9_-]*)$/;

const isLogin = (login: string) => {
  if (login.toLowerCase().indexOf('perl') !== -1 || login.toLowerCase().indexOf('php') !== -1) {
    return false;
  }

  return loginRegular.test(login);
};

export default isLogin;
