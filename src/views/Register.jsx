import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Form, redirect, Link } from 'react-router-dom'
import { register } from '../api/users'
import { useTranslation } from 'react-i18next'

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const user = await register(data)
  return redirect('/')
}
export const Register = () => {
  const { t } = useTranslation()
  return (
    <Form method="post">
      <Box
        sx={{
          display: 'flex',
          p: 4,
          border: 1,
          flexDirection: 'column',
          gap: 1,
          width: '50%',
          margin: '16px auto',
        }}
      >
        <TextField
          name="email"
          label={t('register.email')}
          variant="outlined"
        />
        <TextField
          name="password"
          label={t('register.password')}
          variant="outlined"
        />
        <TextField
          name="username"
          label={t('register.username')}
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          {t('register.register')}
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
      </Box>
    </Form>
  )
}
