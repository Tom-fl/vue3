/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-10-21 13:52:05
 * @LastEditTime: 2022-10-21 15:38:27
 * @Email: Tom
 * @FilePath: \node\index3.js
 * @Environment: Win 10
 * @Description:
 */
const express = require('express')
const app = express()
var num = 1

app.get('/list', (req, res) => {
  res.json({
    code: 200,
    msg: '盲仔',
  })
  console.log('负载均衡 3001', num)
  num++
})

app.listen(3001, () => {
  console.log('success server http://localhost:3001')
})
