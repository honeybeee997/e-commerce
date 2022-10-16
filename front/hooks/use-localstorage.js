const useLocalStorage = (type, values) => {
  // values => {key:value, key:value}
  if (type === "get") {
    for (const key of Object.keys(values)) {
      localStorage.setItem(key, values[key]);
    }
  } else if (type === "set") {
    for (const value of values) {
      localStorage.removeItem(value);
    }
  }
};

export default useLocalStorage;
