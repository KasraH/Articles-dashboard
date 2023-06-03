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

export const deleteArticle = async slug => {
  if (!slug) {
    return
  }
  const { data } = await httpHandler.delete(`articles/${slug}`)
  return data
}
