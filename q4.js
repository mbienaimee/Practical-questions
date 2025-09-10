const sortArr = (arr)=>{
  
  const sort = arr.sort((a,b)=>{
    return a-b
  })
 return sort
  
}
console.log(sortArr([7,5,3,9,1,2]))