// import Head from 'next/head';
// import Image from 'next/image';

import { Button, Htag } from '../components';

export default function Home():JSX.Element {
  return (
    <>
      <Htag tag='h1'>Привет МИР</Htag>
      <Htag tag='h2'>Привет МИР</Htag>
      <Htag tag='h3'>Привет МИР</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </>
  );
}
