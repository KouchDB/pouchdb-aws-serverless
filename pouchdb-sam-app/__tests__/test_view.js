{
    "views": {
      "all": {
        "map": "function(doc) { emit('x2', doc.x * 2) }",
        "reduce": "_sum"
      }
    }
  }