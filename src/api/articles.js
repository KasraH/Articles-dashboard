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

export const createArticle = async article => {
  if (!article) {
    return
  }
  const data = await httpHandler.post('articles', {
    article,
  })
  return data
}
export const getArticle = async slug => {
  if (!slug) {
    return
  }
  const { data } = await httpHandler.get(`articles/${slug}`)
  return data.article
}

export const updateArticle = async article => {
  if (!article) {
    return
  }
  const { slug, ...otherFields } = article
  if (!slug) {
    return
  }
  const { data } = await httpHandler.put(`articles/${slug}`, {
    article: otherFields,
  })
  return data
}
