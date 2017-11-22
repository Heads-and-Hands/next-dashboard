const Omit = (source, ...props) => {
  const filteredObject = { ...source };
  props.forEach((key) => {
    if (Object.keys(source).indexOf(key) > -1) {
      delete filteredObject[key];
    }
  });
  return filteredObject;
};

export default Omit;
