import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Form, redirect, Link } from 'react-router-dom'
import { login } from '../api/users'
import { useTranslation } from 'react-i18next'

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const user = await login(data)
  return redirect('/')
}
export const Login = () => {
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
        <TextField name="email" label={t('login.email')} variant="outlined" />
        <TextField
          name="password"
          label={t('login.password')}
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          {t('login.login')}
        </Button>
        <Typography>
          {t("login.don't have an account?")}
          <Link
            to="/register"
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            {t('login.register now')}
          </Link>
        </Typography>
      </Box>
    </Form>
  )
}
