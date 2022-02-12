import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

interface Props {
  desc: string;
  link: string;
  info: string;
  link_text: string;
}

const DownloadPage = ({ desc, link, info, link_text }: Props) => {
  useEffect(() => {
    let l = document.getElementsByTagName('a')[0];
    l.click();
  }, []);

  return (
    <div>
      <Head>
        <title>Alberto Mosconi CV</title>
        <meta name='description' content={desc} />
      </Head>
      <main className={styles.main}>
        {info}
        <a href={link} download>
          {link_text}
        </a>
      </main>
    </div>
  );
};

export default DownloadPage;
