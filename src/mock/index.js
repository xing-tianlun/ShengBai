// 首先引入Mock
// const Mock = require('mockjs');
import Mock from 'mockjs'

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '100-200'
});

// 验证码
let codenum = ""
Mock.mock('/api/sendCode', 'get', res => {
  let code = Mock.mock({
    code: 0,
    "codeMsg|": /[0-9]{4}/,
    msg: '验证码发送成功'
  })
  console.log(code);
  codenum = code.codeMsg
  return code
})
// 初始用户
let userList = [{}, {
    id: 1,
    user: '12344445555',
    token: "111"
  },
  {
    id: 2,
    user: '12344446666',
    token: "222"
  },
]

// 登录
Mock.mock('/api/login', 'post', req => {
  let {
    username,
    code
  } = JSON.parse(req.body)
  let flag = false;
  if(code !== codenum) {
    return {
      code: 2,
      message: "验证码错误",
    }
  }
  userList.forEach((item, index) => {
    if (item.user == username) { // 用户传来的
      flag = index;
      return false
    }
  })
  if (flag) {
    return {
      code: 0,
      message: "用户登录成功",
      userinfo: userList[flag]
    }
  } else {
    let id = parseInt(userList[userList.length - 1].id) + 1
    userList.push(Mock.mock({
      id,
      user:username,
      token: /[0-9]{6}/
    }))
    return {
      code: 1,
      message: "用户登录成功",
      userinfo: userList[userList.length - 1]
    }
  }
})

// 获取商品列表
import goods from './goods.json'
Mock.mock('/api/goods', 'get', res => {
  return goods
})
// 分页请求
let goodsList = goods.data.map(el => el.foods).flat()
Mock.mock('/api/goodsList', 'post', res => {
  let {page, limit} = JSON.parse(res.body);
  let aaa = goodsList.slice(page*limit,page*limit + limit)
  return aaa
})

// 搜索商品接口
let searchRecord = []
Mock.mock('/api/searchGoods', 'post', res => {
  let {
    txt
  } = JSON.parse(res.body)
  searchRecord.push(txt)
  searchRecord = [...new Set(searchRecord)]
  let reg = new RegExp(txt);
  let goodsList = goods.data.map(item => item.foods).flat()
  let goodList = goodsList.filter(item => reg.test(item.name))
  return {
    goodList
  }
})
