import httpHandler from './httpHandler'

export const getUserArticles = async username => {
  if (!username) {
    return []
  }
  const { data } = await httpHandler.get('articles', {
    params: {
      author: username,
    },
  })
  return data.articles
}
