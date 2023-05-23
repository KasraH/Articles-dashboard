import { useLoaderData } from 'react-router-dom'
import { getCurrentUser } from '../api/users'
import { getUserArticles } from '../api/articles'
import ArticleTable from '../components/ArticlesTable'

export async function loader() {
  const user = await getCurrentUser()
  const articles = await getUserArticles(user.username)
  return { user, articles }
}

export const Articles = () => {
  const { articles } = useLoaderData()

  return (
    <div>
      <ArticleTable articles={articles} />
    </div>
  )
}
