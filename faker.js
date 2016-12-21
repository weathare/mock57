var jsf = require('json-schema-faker')
var schema = require('./order_schema.json')

module.exports = function() {
  var data = { items: [] }
  var fake = null

  for (var i = 0; i < 50; i++) {
    fake = jsf(schema).item
    if (typeof fake.id === "object") continue
    data.items.push( fake )
  }

  return data
}
