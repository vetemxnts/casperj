import ScrollObserver from "@/components/util/scrollObserver";
import { techIcons } from "@/constants/icons";

export default function AboutIcons() {
  return (
    <ScrollObserver className="size-auto gap-auto
    lg:flex lg:flex-row
    md:grid-cols-[4rem_4rem_4rem] md:grid-rows-2
    grid justify-around grid-cols-[4rem_4rem] grid-rows-3"
    styles={[
      ["translate-x-12", "opacity-0"],
      ["translate-x-0", "opacity-100"]
    ]}
    animation="[transition:_transform_.5s_cubic-bezier(0,.75,.25,1),_opacity_.5s_cubic-bezier(0,.75,.25,1)]">
      {techIcons.map(item => {
        return (
          <div className="size-16 grid place-items-center">
            <div className="size-full grid place-items-center">
              <item.icon/>
            </div>
          </div>
        );
      })}
    </ScrollObserver>
  );
}