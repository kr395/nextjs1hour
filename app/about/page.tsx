"use client"
import { useRouter } from "next/router"
export default function About() {
    const router = useRouter()
    return (<div>
        
        <h1>This is About Page </h1>
        <button onClick={()=>{
            router.push("/")
        }}>Go To Home</button>
        </div>
        )
    
}