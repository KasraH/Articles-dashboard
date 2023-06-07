import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const getDefaultValues = article => {
  const base = {
    slug: '',
    title: '',
    body: '',
    description: '',
  }
  if (!article) {
    return base
  }
  const { slug, title, body, description } = article
  return {
    slug,
    title,
    body,
    description,
  }
}
const ArticleForm = props => {
  const { article } = props
  const defaultValues = getDefaultValues(article)
  return (
    <Grid container spacing={2} sx={{ px: 6 }}>
      <Grid xs={8} item>
        {defaultValues.slug && (
          <input type="hidden" name="slug" value={defaultValues.slug} />
        )}
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          defaultValue={defaultValues.title}
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          defaultValue={defaultValues.description}
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          name="body"
          label="Body"
          variant="outlined"
          defaultValue={defaultValues.body}
          fullWidth
          sx={{ mb: 4 }}
          multiline
          rows={8}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}
export default ArticleForm
