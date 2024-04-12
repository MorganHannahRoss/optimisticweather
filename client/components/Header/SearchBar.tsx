import { useLocations } from '../../hooks/useLocations'
import Select from 'react-select'
import { Location } from '../../../models/locations'

interface SearchBarProps {
  location: Location
  setLocation: React.Dispatch<React.SetStateAction<Location>>
}

function SearchBar(props: SearchBarProps) {
  const { data, isPending, isError, error } = useLocations()

  if (isPending) {
    return <p>loading...</p>
  }
  if (isError) {
    return <span>Oops: {error.message}</span>
  }

  return (
    <>
      <Select
        options={data}
        getOptionLabel={(location) => location.city}
        getOptionValue={(location) => location.id.toString()}
        onChange={(newValue) => {
          if (newValue) {
            props.setLocation(newValue)
          } else {
            throw new Error('no location selected')
          }
        }}
      />
    </>
  )
}

export default SearchBar
