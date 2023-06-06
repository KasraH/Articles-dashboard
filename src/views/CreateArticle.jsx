import ArticleForm from '../components/ArticleForm'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Form, redirect } from 'react-router-dom'
import { createArticle } from '../api/articles'

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const response = await createArticle(data)
  return redirect('/articles')
}

export const CreateArticle = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sx={{ pl: 4, mb: 4 }} item>
        <Typography variant="h2" component="h2">
          New Article
        </Typography>
      </Grid>
      <Grid xs={12} component={Form} method="post" item>
        <ArticleForm />
      </Grid>
    </Grid>
  )
}

export default CreateArticle
