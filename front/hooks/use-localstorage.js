const useLocalStorage = (type, values) => {
  // values => {key:value, key:value}
  if (type === "set") {
    for (const key of Object.keys(values)) {
      const value = JSON.stringify(values[key]);
      localStorage.setItem(key, value);
    }
  } else if (type === "get") {
    for (const value of values) {
      localStorage.getItem(value);
    }
  } else if (type === "remove") {
    for (const value of values) {
      localStorage.removeItem(value);
    }
  }
};

export default useLocalStorage;
