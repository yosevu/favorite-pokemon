/**
 * Creates a simple container for managing application state.
 *
 * @param {Object} initialState - The component's initial state
 *
 */
const createStore = (initialState = {}) => {
  let state = initialState

  const subscriptions = []

  const get = (key = null) => {
    if (key === null) {
      return state
    }

    return state[key]
  }

  const update = (action, fn) => {
    const nextState = fn(action, state)

    logGroup(
      `Action: ${action.type}`,
      [
        () => log(`Payload:`, action.payload),
        () => log('Updated state:'),
        () => table(nextState.monsters),
      ],
    )

    if (state !== nextState) {
      state = nextState
      subscriptions.forEach((subscription) => {
        subscription(nextState)
      })
    }
  }

  const subscribe = (subscription) => {
    subscriptions.push(subscription)
  }

  return {
    get,
    update,
    subscribe,
  }
}

export {
  createStore,
}
