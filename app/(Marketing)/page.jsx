"use client"

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  
  return (
    <div className="flex-1 flex flex-col">
      
      <Navbar/>
      <Hero />
    </div>
  );
}
