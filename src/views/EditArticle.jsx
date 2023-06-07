import ArticleForm from '../components/ArticleForm'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Form, redirect, useLoaderData } from 'react-router-dom'
import { updateArticle, getArticle } from '../api/articles'

export async function loader({ params }) {
  const article = await getArticle(params.slug)
  return { article }
}

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const response = await updateArticle(data)
  return redirect('/articles')
}

export const EditArticle = () => {
  const { article } = useLoaderData()
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sx={{ pl: 4, mb: 4 }} item>
        <Typography variant="h2" component="h2">
          Edit Article
        </Typography>
      </Grid>
      <Grid xs={12} component={Form} method="post" item>
        <ArticleForm article={article} />
      </Grid>
    </Grid>
  )
}

export default EditArticle
