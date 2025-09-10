const removal=(array)=>{
  const newArray = []
  let count = 0
  for(arr of array){
    if(newArray.includes(arr)){
      count++
    }else{
      newArray.push(arr)
    }
  }
  return count
  
}

console.log(removal([1,1,2,3,3,3,2,4,5,5,6,7]))