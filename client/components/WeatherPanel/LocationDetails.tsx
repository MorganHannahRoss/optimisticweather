interface LocationDetailsProps {
  location: Location
}

function LocationDetails({ location }: LocationDetailsProps) {
  if (!location) {
    return <p>Loading....</p>
  }

  return <h2>{location.city}</h2>
}

export default LocationDetails
