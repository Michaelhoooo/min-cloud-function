const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = (event, context) => {
  return db.collection('usercontent').where({
    year: event.year,
    month: event.month,
    openId: event.openId
  })
  .get()
  .then(res => {
    let dataAry = res.data
    let map = {}
    dataAry.map(item => {
      map[item.day] = []
    })
    Object.keys(map).map(item => {
      let ary = []
      dataAry.map(key => {
        if (item == key.day) {
          ary.push(key.flag)
        }
      })
      map[item] = [...new Set(ary)]
    })
    return map
  })
}