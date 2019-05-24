var Fly = require("flyio")
var fly = new Fly

const baseUrl = 'http://127.0.0.1:8000/'

fly.interceptors.request.use((request)=>{
  request.baseURL = baseUrl
  // request.headers["X-Tag"]="flyio";
  return request;
})

export default fly

export function setAuthorization(token) {
  fly.interceptors.request.use((request)=>{
    request.baseURL = baseUrl
    // request.headers["X-Tag"]="flyio";
    return request;
  })
}