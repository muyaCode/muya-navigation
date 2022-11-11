export default defineEventHandler(async (event) => {
  const body = await readBody(event) // 拿到body
  const query = getQuery(event) // 拿到query
  const cookies = parseCookies(event) // 拿到cookies
  return { body, query, cookies }
})