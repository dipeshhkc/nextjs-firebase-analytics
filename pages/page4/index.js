import React from 'react';
import Link from 'next/link'

const Page1 = () => {
  return (
    <div>
      This is Page4
      <Link href="/page3"> PAGE 3 </Link>
      <Link href="/"> HOME</Link>
    </div>
  );
};

export default Page1;
