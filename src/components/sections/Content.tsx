import contentItems from '@/constants/contentItems';
import {Element} from '../../constants/scroll'

export default function Content() {
  return (
    <main className="w-full h-auto box-border">
      {contentItems.map(contentItem => {
        return (
          <>
            <Element name={contentItem.title} key={contentItem.key}>
              <contentItem.section/>
            </Element>
          </>
        );
      })}
    </main>
  );
}