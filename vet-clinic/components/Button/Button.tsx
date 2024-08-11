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
  hoverColor: string;
}

const Button = ({
  buttonStyling,
  faIcon,
  text,
  src,
  isLink,
  hoverColor: hoverBGColor,
}: IButtonProps) => {
  return (
    <>
      <motion.button
        className={`${buttonStyling}`}
        whileHover={{
          scale: 1.05,
          backgroundColor: `${hoverBGColor}`,
          fontWeight: 'bold',
        }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.4 }}>
        {faIcon && !isLink && (
          <a href={src} className="flex items-center justify-center gap-2">
            <FontAwesomeIcon className="h-4 w-4" icon={faIcon} />
            {text}
          </a>
        )}
        {isLink && <Link href={src}>{text}</Link>}
      </motion.button>
    </>
  );
};

export default Button;
