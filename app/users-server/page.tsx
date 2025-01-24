type User = {
    id: Number,
    name : String,
    username : String,
    email : String,
    Phone : String
}

export default async function UsersServer(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return (
        <ul className="space-y-4 p-4">
          {
            users.map((user : User)=>{
                <li key={user.id}></li>
            })
          }
        </ul>
    )
}