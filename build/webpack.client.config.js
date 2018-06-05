const base = require("./webpack.base.config")
const extractTextPlugin = require("extract-text-webpack-plugin")
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = Object.assign({}, base, {
    plugins: base.plugins || []
});


config.module.rules.filter(x => { return x.loader == 'vue-loader'}).forEach(s => s.options.extractCSS = true)
config.plugins.push(
    new extractTextPlugin('assets/styles.css')
)
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new uglifyJsPlugin())
}

module.exports = config