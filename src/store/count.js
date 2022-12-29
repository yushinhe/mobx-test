import {makeAutoObservable} from 'mobx'

class Count {
    constructor(){
        makeAutoObservable(this,{},{autoBind:true})
    }
    count = 1
    addCount(){
        this.count ++
    }
    minusCount(){
        this.count --
    }
}

const count = new Count()
export default  count