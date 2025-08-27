// 'use client';
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import BackgroundVideo from "next-video/background-video";
import bcs01 from "/videos/BCS01.mp4";

export default function Home() {
  return (
    <div className="relative top-0 left-0 w-full h-screen overflow-hidden bg-gradient-to-t from-primary to-accent">
      <BackgroundVideo 
        src={bcs01}
        // className="absolute inset-0 w-full h-full object-cover"
      >
        <div className="relative top-3 z-10">
          {/* Your content can go here */}
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Welcome to BCS</h1>
            <p className="text-xl">Your trusted service provider platform</p>
          </div>
        </div>
      </BackgroundVideo>
    </div>
  );
}
