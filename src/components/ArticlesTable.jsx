import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ArticleItemMenu } from './ArticleItemMenu'
import DeleteModal from './DeleteModal'

export const ArticleTable = props => {
  const { articles } = props
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [deletingArticle, setDeletingArticle] = useState(null)

  const handleOpenDeleteModal = articleId => {
    setDeletingArticle(articleId)
    setDeleteModalOpen(true)
  }

  const handleCloseDeleteModal = () => {
    setDeletingArticle(null)
    setDeleteModalOpen(false)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Tags</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map(({ title, author, body, tagList, slug }, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell align="center">{title}</TableCell>
              <TableCell align="center">{author.username}</TableCell>
              <TableCell align="center">{tagList.join(', ')}</TableCell>
              <TableCell align="center">{body.substring(0, 20)}</TableCell>
              <TableCell align="center">
                <ArticleItemMenu
                  onDelete={() => {
                    handleOpenDeleteModal(slug)
                  }}
                  onEdit={() => console.log('Edit')}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DeleteModal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        articleId={deletingArticle}
      />
    </TableContainer>
  )
}

export default ArticleTable
