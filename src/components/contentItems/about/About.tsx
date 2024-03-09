import ScrollObserver from "@/components/util/scrollObserver";

export default function About() {
  return (
    <>
      <section className="bg-black w-full h-auto py-12 pr-[min(10vw,3rem)] box-border">
        <main className="w-full h-auto flex flex-row">
          <div className="min-w-[min(10vw,3rem)] bg-black z-10"></div>
          <div className="min-w-px h-auto bg-white z-10"></div>
          <div className="min-w-4 bg-black z-10"></div>
          <ScrollObserver 
          className="w-9/12 h-auto text-white text-[clamp(0.75rem,5vw,2rem)] hider1 [transform:_translateX(-100%)]"
          onVisible={["transform-none"]}
          onHidden={["[transform:_translateX(-100%)]"]}
          threshold={0.3}>
            <h1>
              My name is Casper and I am an aspiring web developer from Warsaw, Poland
            </h1>
          </ScrollObserver>
        </main>
      </section>
      <section className="[background:_linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(0,0,0,1)_100%)] w-full h-auto px-8 py-12 box-border">
        <ScrollObserver
        className="w-full h-auto text-white text-shadow text-[clamp(0.25rem,2.5vw,1rem)] hider2 [transform:_translateX(4rem)]"
        onVisible={["opacity-100", "transform-none"]}
        onHidden={["opacity-0", "[transform:_translateX(4rem)]"]}
        threshold={0.3}>
          <h1 className="ml-[min(calc(50vw/3),5rem)] text-end">
            I first picked up programming when i was 15 years old. After that I have been experimenting
            with a lot of things until I eventually decided to be a web developer.
          </h1>
        </ScrollObserver>
      </section>
    </>
  );
}
