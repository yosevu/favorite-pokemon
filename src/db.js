
const persist = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const retrieve = (key) => JSON.parse(localStorage.getItem(key))
const hasKey = (key) => retrieve(key) !== null

export {
  hasKey,
  persist,
  retrieve,
}
