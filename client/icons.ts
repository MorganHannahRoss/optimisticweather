const icons = import.meta.glob('./icons/*.png', {
  eager: true,
}) as Record<string, string>

export default icons
