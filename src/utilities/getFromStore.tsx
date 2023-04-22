const getFromStore = (key: string) => {
  const localStore = localStorage.getItem("store");
  if(localStore !== null) {
    return JSON.parse(localStore)[key] || null;
  }
}

export {
  getFromStore
}