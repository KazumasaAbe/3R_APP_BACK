
async function test_get(req, res) {
  res.send({
    message: 'test'
  })
  return
}


exports.method = ['GET']
exports.handleRequestGet = test_get;
