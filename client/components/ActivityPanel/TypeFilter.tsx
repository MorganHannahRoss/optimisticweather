function TypeFilter({ onChange }) {
  const typeOptions = [
    { label: 'All Types', value: '' },
    { label: 'Half day or longer', value: 'half day or longer' },
    { label: 'Full day', value: 'full day' },
    { label: 'Short', value: 'short' },
    { label: 'Multi day', value: 'multi day' },
    { label: 'Half day', value: 'half day' },
    { label: 'Night', value: 'night' },
  ]

  return (
    <select onChange={onChange}>
      {typeOptions.map((type) => (
        <option key={type.value} value={type.value}>
          {type.label}
        </option>
      ))}
    </select>
  )
}

export default TypeFilter
