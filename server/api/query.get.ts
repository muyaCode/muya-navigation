export default defineEventHandler((event) => {
  const query = getQuery(event)
  return { a: query.a, b: query.b }
})