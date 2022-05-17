import type { NextPage } from 'next';
import DownloadPage from '../components/DownloadPage';

const It: NextPage = () => {
  return (
    <DownloadPage
      desc='Il curriculum di Alberto Mosconi.'
      link='https://github.com/albertomosconi/curriculum/raw/main/alberto-mosconi-cv_IT.pdf'
      info='Se il download non parte automaticamente'
      link_text='clicca qui'
    />
  );
};

export default It;
