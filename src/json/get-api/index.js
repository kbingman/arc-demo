const arc = require('@architect/functions')

const route = (req, res) => {
  console.log(JSON.stringify(req, null, 2))
  res({
    json: { msg: `hello world` }
  })
}

exports.handler = arc.json.get(route)
