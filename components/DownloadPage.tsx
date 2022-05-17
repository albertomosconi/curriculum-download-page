import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

interface Props {
  desc: string;
  link: string;
  info: string;
  link_text: string;
}

const DownloadPage = ({ desc, link, info, link_text }: Props) => {
  const router = useRouter();

  useEffect(() => {
    let l = document.getElementsByTagName('a')[0];
    l.click();
    setTimeout(() => router.back(), 1000);
  }, []);

  return (
    <div>
      <Head>
        <title>Alberto Mosconi's CV</title>
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
