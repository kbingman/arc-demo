@app
testapp

@tables
people
  pplID *String
  insert Lambda
  update Lambda
  delete Lambda

cats
  pplID *String
  catID **String

@html
get /

@json
get /posts
