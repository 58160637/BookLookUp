function BookLookup(service){
  this.service = service

  this.search=(isbn)=>{
    let obj = service(isbn)
    return {
      bookName : obj.title,
      //bookName :"TOTORO",
      cover : obj.images,
      isbn : obj.isbn
    }
  }
}
test('test search function',()=>{
  const returnObject = {
    title : 'TOTORO',
    images : "totoro.png",
    isbn : "123456"
  }
  const mockAmazon = jest.fn('123456')
    .mockReturnValue(returnObject)

  let app = new BookLookup(mockAmazon)


  let result = app.search('123456')


  expect(result.bookName).toBe(returnObject.title)
  expect(mockAmazon).toBeCalled()
  expect(mockAmazon).toBeCalledWith('123456')
})
