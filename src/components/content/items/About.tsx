import AboutIcons from "../about/AboutIcons";
import AboutIntro from "../about/AboutIntro";
import AboutMain from "../about/AboutMain";

export default function About() {
  return (
    <>
      <section className="w-full h-auto xl:px-12 px-4 pt-12 pb-[min(6vw,_3rem)]">
        <AboutIntro />
      </section>
      <section className="w-full h-auto xl:px-24 px-4 flex flex-col gap-4">
        <AboutMain />
        <AboutIcons />
      </section>
    </>
  );
}
