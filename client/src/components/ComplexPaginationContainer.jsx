import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData()
  const { pageCount, page } = meta
  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${activeClass ? 'bg-base-300 border-base-300 ' : ''
          }`}
      >
        {pageNumber}
      </button>
    )
  }

  const renderPageButtons = () => { }

  if (pageCount < 2) {
    return null
  }

  return <div>ComplexPaginationContainer</div>
}

export default ComplexPaginationContainer
