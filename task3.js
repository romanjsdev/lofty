let count = 0;

    const getData = () => Promise.resolve(++count)
    const sleep = (n) => new Promise(resolve => setTimeout(resolve, n))

    const memoize = (funct, time) =>{
      let date
      let res
      return ()=>{
        if (!date){
            date = new Date()
            res = funct()
            return res
        }
        else{
            if((new Date - date)> time){
                date = new Date()
                res = funct()
                return res
            } else{
                return res
            }
        }
    }
} 

const getJsonMemoize = memoize(getData, 1000)

const run = async()=>{
    console.log(await getJsonMemoize()) // 1
    console.log(await getJsonMemoize()) // 1
    await sleep(3000)
    console.log(await getJsonMemoize()) // 2
}
run();