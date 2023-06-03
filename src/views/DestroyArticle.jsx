import { deleteArticle } from '../api/articles'
import { redirect } from 'react-router-dom'
export async function action({ params }) {
  await deleteArticle(params.articleId)
  return redirect('/articles')
}
