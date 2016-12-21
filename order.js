var jsf = require('json-schema-faker')
var schema = require('./order_schema.json')

module.exports = function() {
  var data = { orders: [] }
  var fake = null

  for (var i = 0; i < 20; i++) {
    fake = jsf(schema).order
    if (typeof fake.id === "object") continue
    data.orders.push( fake )
  }

  return data
}

