import contentItems from '@/constants/contentItems';
import {Element} from '../../constants/scroll'

export default function Content() {
  return (
    <main className="w-full h-[3000px]">
      {contentItems.map(contentItem => {
        return (
          <Element name={contentItem.title} key={contentItem.key}>
            <contentItem.section/>
          </Element>
        );
      })}
    </main>
  );
}