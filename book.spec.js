function BookLookup(){
  this.search=(isbn)=>{
    let obj = {
      bookName : 'TOTORO',
      cover : "totoro.png",
      isbn : "123456"
    }
    return obj
  }
}
test('test search function',()=>{
  let app = new BookLookup()
  let result = app.search('123456')

  expect(result.bookName).toBe('TOTORO')
})
