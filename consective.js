const makeArrayConsective =(arr)=>{
    const sort = arr.sort((a,b)=>a-b)
    let count = 0
    for(let i=sort[0];i<=sort[sort.length-1];i++ ){
        if(!sort.includes(i)){
        count++
        }
    }
    return count
  
    
}
console.log(makeArrayConsective([6,2,3,8]))