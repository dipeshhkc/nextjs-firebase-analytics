import React from 'react';
import Link from 'next/link';

const Page2 = () => {
  return (
    <div>
      This is Page3
      <Link href="/page4"> PAGE 4 </Link>
      <Link href="/"> HOME</Link>
    </div>
  );
};

export default Page2;
