import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Form, redirect, Link } from 'react-router-dom'
import { register } from '../api/users'
import { useTranslation } from 'react-i18next'
import { Formik, Field } from 'formik'
import * as yup from 'yup'

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const user = await register(data)
  return redirect('/')
}
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  username: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Username is Required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

export const Register = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        display: 'flex',
        p: 4,
        border: 1,
        flexDirection: 'column',
        width: '50%',
        margin: '16px auto',
      }}
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form method="post">
            <Field
              fullWidth
              name="username"
              type="text"
              as={TextField}
              variant="outlined"
              label={t('register.username')}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              sx={{ mb: 1 }}
            />
            <Field
              fullWidth
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              label={t('login.email')}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ mb: 1 }}
            />

            <Field
              fullWidth
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              label={t('register.password')}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ mb: 1 }}
            />

            <Button
              variant="contained"
              type="submit"
              disabled={!dirty || !isValid}
              sx={{ mb: 1 }}
            >
              Submit
            </Button>
            <Typography>
              {t('register.already registered?')}
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {t('register.login')}
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
