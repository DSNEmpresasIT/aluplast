export function getFormatDate(date: string, config: Intl.DateTimeFormatOptions = { weekday: "short", year:"2-digit", month:"short", day:"2-digit"}) {
  return new Date(date).toLocaleDateString('es-ar', config)
}