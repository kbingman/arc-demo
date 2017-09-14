const arc = require('@architect/functions')

const route = (req, res) => {
  console.log(JSON.stringify(req, null, 2))
  res({html:`hello nick`})
}

exports.handler = arc.html.get(route)
