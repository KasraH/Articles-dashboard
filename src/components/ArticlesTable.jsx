import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ArticleItemMenu } from './ArticleItemMenu'
import DeleteModal from './DeleteModal'
import AppPagination from './AppPagination'

export const ArticleTable = props => {
  const { articles } = props
  const navigate = useNavigate()
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [deletingArticle, setDeletingArticle] = useState(null)
  const [currentPage, setCurrentPage] = useState(1) // Current page state

  const handleOpenDeleteModal = articleId => {
    setDeletingArticle(articleId)
    setDeleteModalOpen(true)
  }

  const handleCloseDeleteModal = () => {
    setDeletingArticle(null)
    setDeleteModalOpen(false)
  }

  // Pagination logic
  const pageSize = 10 // Number of articles per page
  const totalArticles = articles.length
  const totalPages = Math.ceil(totalArticles / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const displayedArticles = articles.slice(startIndex, startIndex + pageSize)

  const handleChangePage = page => {
    setCurrentPage(page)
  }

  return (
    <div>
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
            {displayedArticles.map(
              ({ title, author, body, tagList, slug }, index) => (
                <TableRow key={index}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell align="center">{title}</TableCell>
                  <TableCell align="center">{author.username}</TableCell>
                  <TableCell align="center">{tagList.join(', ')}</TableCell>
                  <TableCell align="center">{body.substring(0, 20)}</TableCell>
                  <TableCell align="center">
                    <ArticleItemMenu
                      onDelete={() => {
                        handleOpenDeleteModal(slug)
                      }}
                      onEdit={() => navigate(`/articles/${slug}/edit`)}
                    />
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <AppPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={handleChangePage}
      />

      <DeleteModal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        articleId={deletingArticle}
      />
    </div>
  )
}

export default ArticleTable
