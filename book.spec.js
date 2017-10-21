function BookLookup(service){
  this.service = service

  this.search=(isbn)=>{
    let obj = service(isbn)
    return service(isbn)
  }
}
test('test search function',()=>{
  const returnObject = {
    bookName : 'TOTORO',
    cover : "totoro.png",
    isbn : "123456"
  }
  const mockAmazon = jest.fn('123456')
    .mockReturnValue(returnObject)

  let app = new BookLookup(mockAmazon)


  let result = app.search('123456')


  expect(result).toBe(returnObject)
})
