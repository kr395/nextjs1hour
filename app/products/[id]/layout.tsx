import React from "react";

// This is for nested Layout
export default function ProductLayout({children} : {children: React.ReactNode}){
 return <div>
    {children}
    <h1>Featured Product Details</h1>
    </div>
}