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
            React.isValidElement(child) && child.type === React.Fragment
              ? motion.li
              : motion.div;
          return (
            <MotionComponent
              className="mb-1"
              key={index}
              initial={{ opacity: 0, height: 0, right: -250 }}
              animate={{ opacity: 1, height: 'auto', right: 0 }}
              exit={{ opacity: 0, height: 0, right: -250 }}
              transition={{ duration: 0.5 }}>
              {child}
            </MotionComponent>
          );
        })}
      </AnimatePresence>
      {childrenArray.length > amountShown && (
        <motion.p
          onClick={toggleReadMore}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#3e77aa',
            fontWeight: 'bold',
          }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.4 }}
          className="mt-2 w-fit cursor-pointer rounded-md bg-glacier-300 px-2 py-1 tracking-wide text-steel-blue-50">
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
