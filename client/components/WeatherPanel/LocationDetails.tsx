import { Location } from "../../../models/locations"

function LocationDetails({ location }:{ location: Location }) {
  if (!location) {
    return <p>Loading....</p>
  }

  return <h2>{location.city}</h2>
}

export default LocationDetails
