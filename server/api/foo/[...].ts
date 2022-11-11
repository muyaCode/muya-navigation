// 错误的接口请求捕捉：catch-all 错误捕捉：通过访问 http://localhost:3000/api/foo/参数或接口  触发
export default defineEventHandler(() => `Default foo handler`)