// This is how Dynamic Routing works. [id] use this in folder sturcture
export default async function Product({params} : {params:{id : string}}){
    const {id} = await params;
    return <h1>This Page is about {id}</h1>
}