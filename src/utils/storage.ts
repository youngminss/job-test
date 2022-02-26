const setItem = (key: string, val: any) => {
  try {
    window.localStorage.setItem(key, val);
  } catch (error) {
    throw new Error(`storage : over storage space`);
  }
};
const getItem = (key: string) => {
  try {
    if (!window.localStorage.getItem(key)) {
      throw new Error(`storage : ${key}'s value is not existed`);
    }

    const data = window.localStorage.getItem(key) as string;
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const storage = {
  setItem: setItem,
  getItem: getItem,
};
