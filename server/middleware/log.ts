export default defineEventHandler((event) => {
  console.log('New request Log: ' + event.req.url)
})
