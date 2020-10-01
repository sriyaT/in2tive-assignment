export const usernameValidation = (value) => {
  if (value === null) return true;
  return value !== '' && value?.length >= 2;
};

export const emailValidation = (value) => {
  if (value === null) return true;
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );
};

export const passwordValidation = (value) => {
  if (value === null) return true;
  return value !== '' && value?.length >= 8;
};
