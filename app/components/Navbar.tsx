import Link from 'next/link';
import styles from './Navbar.module.css';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <strong>CM한국지점</strong>
          <span>Premium Hoist</span>
        </Link>
        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/contact" className={styles.ctaButton}>문의하기</Link>
        </div>
        <button className={styles.mobileMenuBtn}>
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
