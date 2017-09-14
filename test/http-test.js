const test = require('tape')
const tiny = require('tiny-json-http')
const arc = require('@architect/workflows')

test('env', t=> {
  t.plan(1)
  t.ok(arc.sandbox.http, 'arc.sandbox.http exists in current scope')
})

/**
 * first we need to start the local http server
 */
var server
test('arc.sandbox.http.start', t=> {
  t.plan(1)
  server = arc.sandbox.http.start(function _start() {
    t.ok(true, 'http server started on https://localhost:3333')
  })
})

/**
 * then we can make a request to it and check the result
 */
test('get /', t=> {
  t.plan(1)
  tiny.get({
    url: 'https://localhost:3333'
  },
  function _get(err, result) {
    if (err) throw err
    t.ok(result.body, 'got 200 response')
  })
})

/**
 * finally close the server so we cleanly exit the test
 */
test('server.close', t=> {
  t.plan(1)
  server.close()
  t.ok(true, 'server closed')
})
