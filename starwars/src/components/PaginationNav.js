import React from 'react'
import { Pagination } from 'semantic-ui-react'
import './PaginationNav.css';

const PaginationNav = () => (
  <Pagination className="pagination-nav"
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={3}
  />
)

export default PaginationNav