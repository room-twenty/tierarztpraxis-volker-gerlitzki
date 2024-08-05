import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <div className="no-wrap montserrat flex list-none justify-evenly bg-blue-300 text-white">
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
