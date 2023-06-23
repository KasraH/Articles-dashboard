import React from 'react'
import Pagination from '@mui/material/Pagination'
import { useNavigate } from 'react-router-dom'

const AppPagination = ({ currentPage, totalPages, onChangePage }) => {
  const navigate = useNavigate()

  const handlePageChange = (event, page) => {
    onChangePage(page)
    const path = page === 1 ? '/articles' : `/articles/page/${page}`
    navigate(path)
  }

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      shape="rounded"
      variant="outlined"
      sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}
    />
  )
}

export default AppPagination
