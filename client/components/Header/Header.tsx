import SearchBar from './SearchBar'
import { Location } from '../../../models/locations.ts'

interface HeaderProps {
  location: Location
  setLocation: React.Dispatch<React.SetStateAction<Location>>
}

function Header(props: HeaderProps) {
  return (
    <>
      <div className="header-wrapper">
        <h1>☀️ Optimistic Weather</h1>
        <div className="search-bar">
          <SearchBar location={props.location} setLocation={props.setLocation}/>
        </div>
      </div>
    </>
  )
}

export default Header
