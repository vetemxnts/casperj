import ScrollObserver from "@/components/util/scrollObserver";

export default function About() {
  return (
    <>
      <section className="w-full h-auto py-12 pr-[min(10vw,3rem)] box-border">
        <main className="w-full h-auto flex flex-row">
          <div className="min-w-[min(10vw,3rem)] bg-neutral-950 z-10"></div>
          <div className="min-w-px h-auto bg-white z-10"></div>
          <div className="min-w-4 bg-neutral-950 z-10"></div>
          <ScrollObserver 
          className="w-9/12 h-auto text-white text-[clamp(0.75rem,5vw,2rem)] hider1 hider1-closed"
          onVisible={["hider1-open"]}
          onHidden={["hider1-closed"]}
          threshold={0.3}>
            <h1>
              My name is Casper and I am an aspiring web developer from Warsaw, Poland
            </h1>
          </ScrollObserver>
        </main>
      </section>
      <section className="w-full h-auto px-4 py-12 box-border">
        <ScrollObserver
        className="w-full h-auto text-white text-shadow text-[clamp(0.25rem,2.5vw,1rem)] hider2 hider2-closed"
        onVisible={["hider2-open"]}
        onHidden={["hider2-closed"]}
        threshold={0.3}>
          <h1 className="text-center">
            I first picked up programming when i was 15 years old. After that I have been experimenting
            with a lot of things until I eventually decided to be a web developer.
          </h1>
        </ScrollObserver>
      </section>
    </>
  );
}
