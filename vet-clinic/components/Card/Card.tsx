import { ILeistungen } from '@/assets/dataArrays/leistungen';
import { ITeam } from '@/assets/dataArrays/aerzte';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const commonStylings: { container: string; heading: string } = {
  container:
    'm-4 flex flex-col rounded-lg p-4 shadow-md shadow-lblue text-pretty',
  heading:
    'my-4 text-center text-[1rem] font-semibold text-dblue underline decoration-lblue underline-offset-[7px]',
};

const LeistungenCard = ({ title, items, faIcon }: ILeistungen) => (
  <div className={commonStylings.container} key={title}>
    {faIcon && (
      <FontAwesomeIcon
        icon={faIcon}
        className="w-12 place-self-center text-dblue"
      />
    )}
    <h2 className={commonStylings.heading}>{title}</h2>
    <ul className="fa-ul">
      {items.map((item, index) => (
        <li key={item + index} className="flex flex-row">
          <span className="fa-li">
            <FontAwesomeIcon
              className="mr-1 mt-[0.2rem] w-[1rem] text-lblue"
              icon={faPaw}
            />
          </span>
          {item}
        </li>
      ))}
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
      className="place-self-center rounded-lg shadow-md shadow-lblue"
    />
    <h2 className={`${commonStylings.heading}`}>{name}</h2>
    {infoTexte.map((infoText, index) => (
      <p key={index} className="mb-3">
        {infoText}
      </p>
    ))}
  </div>
);

export { LeistungenCard, TeamCard };
