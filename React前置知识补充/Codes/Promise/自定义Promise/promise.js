function Promise(executor){
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callbacks = []
    const self = this

    function resolve(data){
        if(self.PromiseState !== 'pending') return
        self.PromiseState = 'resolved'
        self.PromiseResult = data
        self.callbacks.forEach((item) => {
            item.onResolved(data)
        })
    }
    function reject(data){
        if(self.PromiseState !== 'pending') return
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        self.callbacks.forEach((item) => {
            item.onRejected(data)
        })
    }
    try{
        executor(resolve,reject)
    }catch(e){
        reject(e)
    }
}
Promise.prototype.then = function(onResolved,onRejected){
 return new Promise((resolve,reject) => {
     

    if(this.PromiseState === 'resolved'){
    try{
       let result = onResolved(this.PromiseResult)
       if(result instanceof Promise){
            result.then((v) => {
                resolve(v)
            },(r) => {
                reject(r)
            })
       }else{
           resolve(result)
       }
    }catch(e){
        reject(e)
    }
    }
    
    if(this.PromiseState === 'rejected'){
        onRejected(this.PromiseResult)
    }
    if(this.PromiseState === 'pending'){
        this.callbacks.push({
            onResolved,
            onRejected
        })
    }
})
}