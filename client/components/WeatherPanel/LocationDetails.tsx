import { useQuery } from '@tanstack/react-query'
import { getLocation } from '../../apis/apiClient'

function LocationDetails() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['location'],
    queryFn: () => getLocation(),
  })
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }

  console.log(data.adm_area1)
  return (
    <div>
      <p>{data.adm_area1}</p>
      {/* <h2>Location details from lat/lon</h2>
      <p>{data.name}</p>
      <p>{data.adm_area2}</p>
      <p>{data.country}</p>
      <p>{data.lat}</p>
      <p> {data.lon}</p>
      <p>{data.place_id}</p>
      <p>{data.timezone}</p>
      <p>{data.type}</p> */}
    </div>
  )
}

export default LocationDetails
