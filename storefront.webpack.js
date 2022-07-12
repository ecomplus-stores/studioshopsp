const path = require('path')
console.log(path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'))
module.exports = () => ({
  resolve: {
    alias: {
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/js/TheProduct.js')
    }
  }
})