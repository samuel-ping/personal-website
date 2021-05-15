import Link from 'next/link';

import SP from '@components/SP';

const Logo = ({ isAnimated, size }) => (
  <>
    <Link href="/">
      <div
        className="cursor-pointer mx-10 my-3"
        // tabIndex="0" FIX: tabIndex not opening link
      >
        <SP isAnimated={isAnimated} color="#000000" size={size} />
      </div>
    </Link>
  </>
);

export default Logo;
