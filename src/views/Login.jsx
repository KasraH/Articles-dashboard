import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Form, redirect, Link } from 'react-router-dom'
import { login } from '../api/users'

export async function action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const user = await login(data)
  return redirect('/')
}
export const Login = () => {
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
        <TextField name="email" label="email" variant="outlined" />
        <TextField name="password" label="password" variant="outlined" />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Typography>
          Don't have an account?{' '}
          <Link
            to="/register"
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Register Now
          </Link>
        </Typography>
      </Box>
    </Form>
  )
}
