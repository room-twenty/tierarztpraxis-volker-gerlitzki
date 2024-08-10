'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const ReadMore = ({
  amountShown,
  children,
}: {
  amountShown: number;
  children: React.ReactNode;
}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const childrenArray = React.Children.toArray(children);
  const childrenToShow = isReadMore
    ? childrenArray.slice(0, amountShown)
    : childrenArray;

  return (
    <>
      <AnimatePresence>
        {childrenToShow.map((child, index) => {
          const MotionComponent =
            React.isValidElement(child) && child.type === 'li'
              ? motion.li
              : motion.div;
          return (
            <MotionComponent
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}>
              {child}
            </MotionComponent>
          );
        })}
      </AnimatePresence>
      {childrenArray.length > amountShown && (
        <motion.p
          onClick={toggleReadMore}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="cursor-pointer font-bold text-steel-blue-500">
          {isReadMore ? '...mehr lesen' : '...weniger lesen'}
        </motion.p>
      )}
    </>
  );
};

export default ReadMore;

// old and working - keep for now
// 'use client';
// import React, { useState } from 'react';

// const ReadMore = ({
//   amountShown,
//   children,
// }: {
//   amountShown: number;
//   children: React.ReactNode;
// }) => {
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };

//   const childrenArray = React.Children.toArray(children);
//   const childrenToShow = isReadMore
//     ? childrenArray.slice(0, amountShown)
//     : childrenArray;

//   return (
//     <>
//       {childrenToShow}
//       {childrenArray.length > amountShown && (
//         <span
//           onClick={toggleReadMore}
//           className="cursor-pointer text-steel-blue-500">
//           <strong>{isReadMore ? '...mehr lesen' : '...weniger lesen'}</strong>
//         </span>
//       )}
//     </>
//   );
// };

// export default ReadMore;
