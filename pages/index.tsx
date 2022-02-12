import type { NextPage } from 'next';
import DownloadPage from '../components/DownloadPage';

const Home: NextPage = () => {
  return (
    <DownloadPage
      desc="Alberto Mosconi's curriculum vitae."
      link='https://github.com/albertomosconi/curriculum/raw/main/alberto-mosconi-cv.pdf'
      info="If the download doesn't start automatically"
      link_text='click here'
    />
  );
};

export default Home;
