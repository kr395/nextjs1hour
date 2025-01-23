// Creating Response for GET and POST Method // Teste it on Postman or Thunder CLient
export const users = [
    {id: 1 , name : "Sutu"},
    {id: 2 , name : "Gopu"},

]
export async function GET() {
    return Response.json(users)
}
export async function POST(request: Request) {
    const user = await request.json()
    const newUser = {
        id: users.length + 1 ,
        name : user.name,
    }
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers : {
            "Content-Type" : "application/json",
        },
        status : 201,

    })
}
