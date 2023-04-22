const isEmptyString = (value: string): boolean => {
  const regExp = /^\s*$/;
  return regExp.test(value);
}

export {
  isEmptyString
}