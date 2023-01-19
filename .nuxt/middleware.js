const middleware = {}

middleware['getCategories'] = require('../middleware/getCategories.js')
middleware['getCategories'] = middleware['getCategories'].default || middleware['getCategories']

middleware['getPosts'] = require('../middleware/getPosts.js')
middleware['getPosts'] = middleware['getPosts'].default || middleware['getPosts']

export default middleware
