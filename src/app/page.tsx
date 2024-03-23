import Banner from '@/components/sections/Banner';
import Navbar from '@/components/sections/Navbar';
import Content from '@/components/sections/Content';
import Background from '@/components/util/Background';

export default function Page() {
  return (
    <>
      <Background />
      <Banner />
      <Navbar />
      <Content />
    </>
  );
}
