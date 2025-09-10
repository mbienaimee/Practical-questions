const removal = (arr)=>{
  const undepricated = [... new Set(arr)]
  return undepricated
  
}
console.log(removal([1,1,1,2,3,4,5,5]))

const removal = (array)=>{
  const newArray =[]
  
  for(arr of array){
    if(!newArray.includes(arr)){
      newArray.push(arr)
    }
  }
  return newArray
}
console.log(removal([1,1,1,2,3,4,5,5]))

