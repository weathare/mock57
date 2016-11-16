var faker = require('json-schema-faker')
var schema = require('./schema.json')

module.exports = function() {
  var data = { items: [] }
  var fake = faker(schema).item

  for (var i = 0; i < 50; i++) {
    if (typeof fake.id === "object") continue
    data.items.push( fake )
  }

  return data
}
