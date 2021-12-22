const del = require('del')

// Clean folders and files
const clean = () => {
  return del([
    'dist',
    'index.html'
  ])
}

module.exports = clean
