import React from 'react'

function Navbar() {
    const items = [
        {id:1, name:"Features", route:"/features"},
        {id:2, name:"How It Works", route:"/how-it-works"},
        {id:3, name:"Pricing", route:"/pricing"},
    ]
    const check = async () => {
        const res = await fetch("/api/healthy");
        console.log(res)
    }
    return (
        <div className="flex px-20 items-center justify-between bg-base-300 py-5 font-sans dark:bg-black">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Cutpen</a>
            </div>
            <div className="flex-1 flex items-center justify-center gap-4">
                {items.map((item)=>(
                <a key={item.id} href={item.route} className="btn btn-ghost ">
                    {item.name}
                </a>
            ))}
            </div>
            <button className="btn btn-error" onClick={check}>Connection Check</button>
        </div>
    )
}

export default Navbar
