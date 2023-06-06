import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
const ArticleForm = () => {
  return (
    <Grid container spacing={2} sx={{ px: 6 }}>
      <Grid xs={8} item>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          name="body"
          label="Body"
          variant="outlined"
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
