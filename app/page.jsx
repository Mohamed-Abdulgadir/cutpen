"use client"

export default function Home() {
  const check = async ()=>{
    const res = await fetch("/api/healthy");
    console.log(res)
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button className="btn btn-neutral" onClick={check}>Connection Check</button>
    </div>
  );
}
