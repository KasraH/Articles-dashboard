import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useTranslation } from 'react-i18next'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

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
const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  body: yup.string().required('Body is required'),
})

const ArticleForm = props => {
  const { article } = props
  const defaultValues = getDefaultValues(article)
  const { t } = useTranslation()

  return (
    <Formik initialValues={defaultValues} validationSchema={validationSchema}>
      {({ errors, touched, isValid, dirty }) => (
        <Grid container spacing={2} sx={{ px: 6 }}>
          <Grid xs={8} item>
            {defaultValues.slug && (
              <input type="hidden" name="slug" value={defaultValues.slug} />
            )}
            <Field
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              as={TextField}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
              sx={{ mb: 4 }}
            />
            <Field
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              as={TextField}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
              sx={{ mb: 4 }}
            />
            <Field
              name="body"
              label="Body"
              variant="outlined"
              fullWidth
              multiline
              rows={8}
              as={TextField}
              error={touched.body && Boolean(errors.body)}
              helperText={touched.body && errors.body}
              sx={{ mb: 4 }}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={!dirty || !isValid}
            >
              {t('form.submit')}
            </Button>
          </Grid>
        </Grid>
      )}
    </Formik>
  )
}
export default ArticleForm
