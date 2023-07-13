import Link from 'next/link';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <span className={classes.navigation}>
        <Link href='/'>      Featured Events </Link>
        </span>

      <span className={classes.navigation}>
            <Link href='/events'>All Events</Link>
            </span>

    </header>
  );
}

export default MainHeader;