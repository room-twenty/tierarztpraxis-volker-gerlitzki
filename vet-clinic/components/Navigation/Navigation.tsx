import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <div className="no-wrap flex list-none">
      <li>
        <a href="./">Startseite</a>
      </li>
      <li>
        <a href="./">Leistungen</a>
      </li>

      <li>
        <a href="./">Unser Team</a>
      </li>
      <li>
        <a href="./">Blog</a>
      </li>
    </div>
  );
};

export default Navigation;
