import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link
        className="header__title"
        to="/"
      >
        <h1>eBird API UI</h1>
      </Link>
      <Nav />
    </header>
  );
}
