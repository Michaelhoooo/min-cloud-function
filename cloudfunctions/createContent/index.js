const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = (event, context) => {
  let payload = {
    content: event.content,
    flag: parseInt(event.flag),
    year: parseInt(event.year),
    month: parseInt(event.month),
    day: parseInt(event.day),
    userName: event.userName,
    openId: event.openId
  }
  if (event.id) {
    return db.collection('usercontent').doc(event.id).update({
      data: payload
    })
    .then(res => {
      console.log('^^^^^^^^^^^^^^^^^'+ res + '^^^^^^^^^^^^^^^^^')
      return {
        code: 200,
        message: '更新成功'
      }
    })
    .catch(console.error)
  } else {
    return db.collection('usercontent').add({
      data: payload
    })
    .then(res => {
      console.log('^^^^^^^^^^^^^^^^^'+ res + '^^^^^^^^^^^^^^^^^')
      return {
        code: 200,
        message: '保存成功'
      }
    })
    .catch(console.error)
  }
}
