// const obj = {
//   a: 1,
//   it: function() {
//     console.log('2')
//   }
// }

// const {it} = obj
// console.log(it)

// console.log(global.console)
// const console = () => { }
// console.log(1)
test()
function test() {
  {
    const a = 11
    {
      // const a = 10
      console.log(a)
    }
  }
}