const log = (message, value = null) => {
  if (value !== null) {
    console.log(message, value);
    return value;
  }

  console.log(message);
};

const logGroup = (label = null, fns) => {
  console.groupCollapsed(label);
  fns.forEach((fn) => {
    fn();
  });
  console.groupEnd();
};

const table = (value) => {
  console.table(value);
  return value;
};
