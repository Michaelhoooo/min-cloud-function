const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = (event, context) => {
  return db.collection('usercontent')
    .doc(event.id)
    .get()
    .then(res=>{
      return res
    })
    .catch(console.error)
}