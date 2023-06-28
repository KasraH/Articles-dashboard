import {
  useLoaderData,
  Outlet,
  useNavigate,
  NavLink,
  useNavigation,
} from 'react-router-dom'
import { getCurrentUser } from '../api/users'
import { styled } from '@mui/material/styles'
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
import { blue } from '@mui/material/colors'
import LinearProgress from '@mui/material/LinearProgress'
import { useTranslation } from 'react-i18next'

const drawerWidth = 240

export async function loader() {
  const user = await getCurrentUser()
  return { user }
}

const CustomListItem = styled(ListItem)(() => ({
  color: 'white',
  '&.active': { backgroundColor: blue[500] },
}))

const CustomListButton = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(6),
}))

export const Dashboard = () => {
  const { user } = useLoaderData()
  const navigate = useNavigate()
  const navigation = useNavigation()
  const { t } = useTranslation()

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
              {t('dashboard.welcome user', { user: user.username })}
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => {
                window.localStorage.removeItem('token')
                navigate('/login')
              }}
              variant="outlined"
            >
              {t('dashboard.logout')}
            </Button>
          </Box>
        </Toolbar>
        <Box sx={{ width: '100%' }}>
          {navigation.state === 'loading' && <LinearProgress />}
        </Box>
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
                <ListItemText primary={t('dashboard.posts')} />
              </ListItemButton>
            </ListItem>
            <List>
              <CustomListItem
                disablePadding
                component={NavLink}
                to={'articles'}
                end={true}
              >
                <CustomListButton>
                  <ListItemText primary={t('dashboard.all articles')} />
                </CustomListButton>
              </CustomListItem>

              <CustomListItem
                disablePadding
                component={NavLink}
                to={'articles/create'}
                end={true}
              >
                <CustomListButton>
                  <ListItemText primary={t('dashboard.new article')} />
                </CustomListButton>
              </CustomListItem>
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
