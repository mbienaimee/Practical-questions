// sort by height

const sortByHeight =(array)=>{
    const filtering = array.filter((a)=>a!==-1)
    const sort = filtering.sort((a,b)=>a-b)
    idx =0
    const result = array.slice()
    // console.log(sort)
    for(let i=0;i<result.length;i++){
        if(result[i]!== -1){
            result[i]=sort[idx]
            idx++
        }
    }
    
   return result 

    
}
console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]))
