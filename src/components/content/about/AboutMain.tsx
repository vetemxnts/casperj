import ScrollObserver from "@/components/util/scrollObserver";

export default function AboutTechMain() {
  return (
    <ScrollObserver
    styles={[
      ["translate-y-12", "opacity-0"],
      ["translate-y-0", "opacity-100"]
    ]}
    animation="[transition:_transform_.5s_cubic-bezier(0,.75,.25,1),_opacity_.5s_cubic-bezier(0,.75,.25,1)]"
    >
      <h1 className="text-white p-4 bg-sky-800 bg-opacity-10">
        I picked up programming 5 years ago after finding an old JavaScript book at my school's library.
      </h1>
    </ScrollObserver>
  );
}