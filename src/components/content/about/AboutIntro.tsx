import ScrollObserver from "@/components/util/scrollObserver";
import { openSans } from "@/constants/fonts";

export default function AboutIntro() {
  return (
    <>
      <ScrollObserver className="w-full h-auto pb-[min(6vw,_3rem)]"
      styles={[
        ["-translate-x-24", "opacity-0"], 
        ["translate-x-0", "opacity-100"]
      ]}
      animation="[transition:_transform_.5s_cubic-bezier(0,.75,.25,1),_opacity_.5s_cubic-bezier(0,.75,.25,1)]">
        <h1 className={`${openSans.className} text-white text-[min(8vw,3.5rem)]`}>
          My name is <b className="text-sky-800">Kacper</b> and I am an aspiring web developer from Warsaw, Poland.
        </h1>
      </ScrollObserver>
      
      <ScrollObserver className="w-0 h-[2px] ml-auto bg-white"
      styles={[['w-0'], ['w-full']]}
      animation="[transition:_width_.375s_cubic-bezier(0,.75,.25,1)]"/>
    </>
  );
}