const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = (event, context) => {
  console.log(event)
  return db.collection('usercontent').where({
    openId: event.openId,
    year: parseInt(event.year),
    month: parseInt(event.month),
    day: parseInt(event.day)
  })
  .get()
  .then(res => {
    return res
  })
  .catch(console.error)
}