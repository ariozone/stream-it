const axios = require("axios")

export default axios.create({
  baseUrl: "http://localhost:3001"
})
