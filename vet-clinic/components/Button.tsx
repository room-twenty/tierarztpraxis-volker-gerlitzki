'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface IButtonProps {
  buttonStyling: string;
  faIcon?: IconDefinition;
  text: string;
  src: string;
  isLink: boolean;
}

const Button = ({ buttonStyling, faIcon, text, src, isLink }: IButtonProps) => {
  return (
    <>
      <motion.button className={`${buttonStyling}`}>
        {faIcon && !isLink && (
          <a href={src} className="flex items-center justify-center gap-2">
            <FontAwesomeIcon className="w-4" icon={faIcon} />
            {text}
          </a>
        )}
        {isLink && <Link href={src}>{text}</Link>}
      </motion.button>
    </>
  );
};

export default Button;
