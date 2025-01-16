import type { FC } from 'react';
import styles from './styles/header.module.css';
import VKLogo from '../../../public/vk-logo.svg';

const Logo: FC = () => (
  <div className={styles.logo}>
    <img alt="vk-logo" height={35} width={35} src={VKLogo} />
    <p>{`<Тестовое задание>`}</p>
  </div>
);

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  );
};

export default Header;
