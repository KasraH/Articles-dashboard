import httpHandler from './httpHandler'

export const register = async user => {
  const { data } = await httpHandler.post('users', {
    user,
  })
  window.localStorage.setItem('token', data.user.token)
  return data.user
}

export const getCurrentUser = async () => {
  const { data } = await httpHandler.get('user')
  return data.user
}
