import { useLoaderData, Outlet, useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../api/users'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'

const drawerWidth = 240

export async function loader() {
  const user = await getCurrentUser()
  return { user }
}

export const Dashboard = () => {
  const { user } = useLoaderData()
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          backgroundColor: '#373A3C',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box component="div">
            <Typography variant="h6" noWrap component="span">
              My Blog Dashboard
            </Typography>
            <Typography variant="body" component="span" sx={{ ml: 4 }}>
              Welcome {user.username}
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => {
                window.localStorage.removeItem('token')
                navigate('/register')
              }}
              variant="outlined"
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1C7CD5',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List sx={{ color: 'white' }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ pointerEvents: 'none', cursor: 'default' }}>
                <ListItemText primary={'posts'} />
              </ListItemButton>
            </ListItem>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary={'All Articles'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary={'New Article'} />
                </ListItemButton>
              </ListItem>
            </List>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
