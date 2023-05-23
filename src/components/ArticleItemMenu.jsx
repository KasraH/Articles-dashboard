import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Divider from '@mui/material/Divider'

export const ArticleItemMenu = props => {
  const { onDelete, onEdit } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          backgroundColor: '#56C0E0',
          color: 'white',
        }}
      >
        ...
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            width: 164,
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            onEdit()
          }}
        >
          Edit
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose()
            onDelete()
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  )
}

export default ArticleItemMenu
