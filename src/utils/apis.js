export const getMemos = () => {
  try {
    return localStorage.getItem('Memos');
  } catch (e) {
    console.warn(e);
    return false;
  }
};

export const setMemos = (memos) => {
  try {
    return localStorage.setItem('Memos', memos);
  } catch (e) {
    console.warn(e);
    return false;
  }
};

export const resetMemos = () => {
  try {
    localStorage.removeItem('Memos');
    return true;
  } catch (e) {
    console.warn(e);
    return false;
  }
};