import * as React from 'react'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import { Modal, ModalDialogTitle } from './Modal'
import { Form } from 'react-router-dom'

export default function DeleteModal(props) {
  const { open, onClose, articleId } = props

  return (
    <div>
      <Modal
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <ModalDialogTitle id="customized-dialog-title" onClose={onClose}>
          Delete Article
        </ModalDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Are you sure to delete Article?</Typography>
        </DialogContent>
        <DialogActions>
          <Form
            method="post"
            action={`${articleId}/destroy`}
            onSubmit={event => {
              onClose()
            }}
          >
            <Button
              autoFocus
              color="error"
              variant="contained"
              size="medium"
              type="submit"
            >
              Yes
            </Button>
          </Form>
          <Button autoFocus onClick={onClose} size="medium" variant="outlined">
            No
          </Button>
        </DialogActions>
      </Modal>
    </div>
  )
}
