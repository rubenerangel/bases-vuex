export const increment = (state) => {
  state.count++
  state.lastMutation = 'increment'
}

export const incrementBy = (state, val) => {
  state.count+= val
  state.lastMutation = 'incrementBy   ' + val
  state.lastRandomInt = val
}

export const setLoading = (state, payload) => {
  state.isLoading = payload
  state.lastRandomInt = 'setLoading'
}