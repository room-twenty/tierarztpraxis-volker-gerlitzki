import { ILeistungen } from '@/assets/dataArrays/leistungen';
import { ITeam } from '@/assets/dataArrays/aerzte';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import ReadMore from '../ReadMore/ReadMore';
import React from 'react';

const commonStylings: { container: string; heading: string } = {
  container:
    'm-4 flex flex-col rounded-lg p-4 shadow-md shadow-glacier-300 text-pretty',
  heading:
    'my-4 text-center text-[1rem] font-semibold text-steel-blue-500 underline decoration-glacier-300 underline-offset-[7px]',
};

const LeistungenCard = ({ title, items, faIcon }: ILeistungen) => (
  <div className={commonStylings.container} key={title}>
    {faIcon && (
      <FontAwesomeIcon
        icon={faIcon}
        className="h-12 w-12 place-self-center text-steel-blue-500"
      />
    )}
    <h2 className={commonStylings.heading}>{title}</h2>
    <ul className="fa-ul">
      <ReadMore amountShown={3}>
        {items.map((item, index) => (
          <React.Fragment key={item + index}>
            <span className="fa-li">
              <FontAwesomeIcon
                className="mr-1 mt-[0.2rem] h-4 w-4 text-glacier-300"
                icon={faPaw}
              />
            </span>
            {item}
          </React.Fragment>
        ))}
      </ReadMore>
    </ul>
  </div>
);

const TeamCard = ({ imgSrc, name, infoTexte }: ITeam) => (
  <div className={commonStylings.container} key={name}>
    <Image
      src={imgSrc}
      alt={name}
      width={300}
      height={200}
      className="place-self-center rounded-lg shadow-md shadow-glacier-300"
    />
    <h2 className={`${commonStylings.heading}`}>{name}</h2>
    <ul className="fa-ul">
      <ReadMore amountShown={1}>
        {infoTexte.map((infoText, index) => (
          // <p key={index} className="mb-3">
          //   {infoText}
          // </p>
          <React.Fragment key={index}>
            <span className="fa-li">
              <FontAwesomeIcon
                className="mr-1 mt-[0.2rem] h-4 w-4 text-glacier-300"
                icon={faPaw}
              />
            </span>
            {infoText}
          </React.Fragment>
        ))}
      </ReadMore>
    </ul>
  </div>
);

export { LeistungenCard, TeamCard };
