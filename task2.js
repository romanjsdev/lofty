const getJson = async (url)=> await fetch(url).then(res => res.json());

const getData = async()=>{
    const res1 = await getJson('/i/1.json');
    try {
        if(!res1.key){
            throw new Error('No key');
        }
        const res2 = await getJson('/i/2.json');
        return res2.key2;
    } catch (error) {
        console.error(error);
    }
}