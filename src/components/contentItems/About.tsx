import ScrollObserver from "../util/scrollObserver";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400"
})

export default function About() {
  return (
    <>
      <section className="w-full h-screen p-12 box-border">
        <ScrollObserver
        className="w-full h-auto"
        onVisible={["[transform:_translateX(0rem)]", "opacity-100"]}
        onHidden={["[transform:_translateX(-4rem)]", "opacity-0"]}
        animation="[transition:_transform_.5s_cubic-bezier(0,.75,.25,1),_opacity_.5s_cubic-bezier(0,.75,.25,1)]">
          <h1 className={`${openSans.className} text-white text-[min(8vw,4rem)]`}>
            My name is Casper and I am an aspiring web developer from Warsaw, Poland.
          </h1>
        </ScrollObserver>
      </section>
    </>
  );
}
