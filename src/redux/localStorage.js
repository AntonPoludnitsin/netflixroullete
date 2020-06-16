export const saveStateToLocalStorage = (state) => {
  let stateAsString = JSON.stringify(state);
  localStorage.setItem("films-state", stateAsString)
}

export const getLocalStorage = () => {
  return localStorage.getItem('films-state') ? JSON.parse(localStorage.getItem('films-state')) : []
}
