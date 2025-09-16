class Stack{
  constructor(){
    this.stack = []
  }
  
  push(element){
    this.stack.push(element)
    
  }
  pop(){
    if(this.stack.length ===0){
      return "this stack is empty"
    }
    return this.stack.pop()
  }
  
  
  peek(){
    if(this.stack.length === 0){
      return "stack is empty"
    }else{
      return this.stack[this.stack.length-1]
    }
  }
  
  size(){
    return this.stack.length
  }
  print(){
    return this.stack
  }
}


const wtack = new Stack()
console.log(wtack.size())
console.log(wtack.push(12))
console.log(wtack.print())
