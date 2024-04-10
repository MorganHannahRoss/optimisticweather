import SearchBar from './SearchBar'

function Header() {
  return (
    <>
      <div className='header-wrapper'>
        <h1>☀️ Optimistic Weather</h1>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    </>
  )
}

export default Header
