/*
 * @Description: webpack  基本配置文件
 * @Date: 2022-03-14 11:38:22
 * @LastEditTime: 2022-03-25 16:59:09
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


const _DEV_ = process.env.NODE_ENV === 'development'
const resolve = (dir) => {
    return path.resolve(process.cwd(), dir)
}
const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: _DEV_ ? true : false,
      postcssOptions: {
        plugins: [
          ['postcss-preset-env', {
            browsers: '> 0.5%, not dead, iOS >= 7, Android >= 4.3'
          }]
        ]
      }
    }
  }

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                targets: { ie: 9, },
                                ignoreBrowserslistConfig: true,
                                useBuiltIns: false,
                                modules: false,
                                exclude: ['transform-typeof-symbol'],
                              }],
                              ["@babel/preset-react", {
                                targets: "last 2 versions, ie 11", modules: false
                              }],
                              ["@babel/preset-typescript"]
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  postcssLoader,
                  'sass-loader'
                ],
                include: [path.join(__dirname, '../src')]
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
                postcssLoader
              ]
            },
        ]
    },
    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）
        modules: [
          "node_modules",
          resolve("src")
        ],
        // 用于查找模块的目录
    
        extensions: [".js", ".ts", ".tsx",],
    
        alias: {
          '@assets': resolve('src/assets'),
          '@styles': resolve('src/styles'),
          '@components': resolve('src/components'),
          '@constants': resolve('src/constants'),
          '@routes': resolve('src/routes'),
          '@models': resolve('src/models'),
          '@layout': resolve('src/layout'),
          '@view': resolve('src/view'),
          '@plugins': resolve('src/plugins'),
          '@utils': resolve('src/utils')
        }
      },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/template.html')
        })
    ]
}