import contentItems from '@/constants/contentItems';
import {Element} from '../../constants/scroll'

export default function Content() {
  return (
    <main className="w-full h-[3000px] mt-12 box-border">
      {contentItems.map(contentItem => {
        return (
          <>
            <Element name={contentItem.title} key={contentItem.key}></Element>
            <contentItem.section/>
          </>
        );
      })}
    </main>
  );
}