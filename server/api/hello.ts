export default defineEventHandler((event) => {
  console.log('hello event',event.context)
  return {
    data: 'hello word'
  }
})