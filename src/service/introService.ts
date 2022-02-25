export const setGenderToStorage = (genderValue: string) => {
  try {
    window.localStorage.setItem('user-gender', genderValue);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
