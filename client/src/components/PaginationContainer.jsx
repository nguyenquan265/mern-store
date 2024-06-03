import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const PaginationContainer = () => {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  const { pathname, search } = useLocation()
  const navigate = useNavigate()

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  const handlePrevPage = () => {
    let prevPage = page - 1

    if (prevPage < 1) {
      prevPage = pageCount
    }

    handlePageChange(prevPage)
  }

  const handleNextPage = () => {
    let nextPage = page + 1

    if (nextPage < pageCount) {
      nextPage = 1
    }

    handlePageChange(nextPage)
  }

  if (pageCount < 2) {
    return null
  }

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={handlePrevPage}
        >
          PREV
        </button>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page && 'bg-base-300 border-base-300'
              }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={handleNextPage}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer
