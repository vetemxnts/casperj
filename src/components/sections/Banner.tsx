export default function Banner() {
  return (
    <main className="[background:_linear-gradient(0deg,_rgba(0,0,0,0.85)_0%,_rgba(255,255,255,0)_100%)] w-full h-[calc(100vh-3rem)] banner-body flex justify-start items-center overflow-hidden z-10">
      <div className="flex flex-col gap-1">
        <div className="w-max h-auto flex flex-row pl-[10vw]">
          <h1 className="text-white text-[clamp(1rem,10vw,5rem)] overflow-hidden whitespace-nowrap mx-0 my-auto tracking-[0.5rem] animate-typewriter">casperj</h1>
          <div className="w-1 h-auto bg-white animate-typewriterbeam"></div>
        </div>
        <div className="w-max h-auto flex flex-row pl-[10vw]">
          <h1 className="text-gray-500 text-[clamp(0.25rem,2.5vw,1.25rem)] overflow-hidden whitespace-nowrap mx-0 my-auto tracking-[0.125rem] animate-typewriter">Kacper Jeznach</h1>
          <div className="w-1 h-auto bg-white animate-typewriterbeam"></div>
        </div>
      </div>
    </main>
  );
}