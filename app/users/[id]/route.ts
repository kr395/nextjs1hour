// dynamic route 
import { users } from "../route";
// we used get method and you can use other method like post, patch to achive multiple user actions
export async function GET(_request : Request, {params} : {params : {id: string}}){

    const {id} = await params;
    const user = users.find((user)=> user.id === parseInt(id ))
    return Response.json(user)
}