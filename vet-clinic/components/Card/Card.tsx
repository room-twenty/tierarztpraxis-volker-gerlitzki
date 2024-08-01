import { ILeistungen } from '@/assets/dataArrays/leistungen';
import { ITeam } from '@/assets/dataArrays/team';
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

// Alternative die Copilot vorgeschlagen hat. Verstehe ich aber nur bedingt und finde ich zu kompliziert
// Wird bei zeiten gelöscht!

// import { ILeistungen } from '@/assets/dataArrays/leistungen';
// import { ITeam } from '@/assets/dataArrays/team';
// import { faPaw } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';

// const Card = (props: ILeistungen | ITeam) => {
//   const isLeistungen = (props: ILeistungen | ITeam): props is ILeistungen => {
//     return (props as ILeistungen).title !== undefined;
//   };

//   return (
//     <div
//       className="m-4 flex flex-col rounded-lg p-4 shadow-md shadow-lblue"
//       key={isLeistungen(props) ? props.title : props.name}>
//       {isLeistungen(props) && props.faIcon && (
//         <FontAwesomeIcon
//           icon={props.faIcon}
//           className="w-12 place-self-center text-dblue"
//         />
//       )}
//       {'imgSrc' in props && props.imgSrc && (
//         <Image
//           src={props.imgSrc}
//           alt={props.name || ''}
//           fill
//           className="w-[20rem]"
//         />
//       )}
//       {isLeistungen(props) && props.title && (
//         <h2 className="my-2 text-pretty text-center text-[1.3rem] font-semibold text-dblue underline decoration-lblue underline-offset-[7px]">
//           {props.title}
//         </h2>
//       )}
//       {'name' in props && props.name && (
//         <h2 className="my-2 text-pretty text-center text-[1.3rem] font-semibold text-dblue underline decoration-lblue underline-offset-[7px]">
//           {props.name}
//         </h2>
//       )}
//       {isLeistungen(props) && props.items && (
//         <ul className="fa-ul mt-">
//           {props.items.map((item, index) => (
//             <li key={item + index} className="flex flex-row text-pretty">
//               <span className="fa-li">
//                 <FontAwesomeIcon
//                   className="mr-1 mt-[0.2rem] w-[1rem] text-lblue"
//                   icon={faPaw}
//                 />
//               </span>
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//       {'infoTexte' in props &&
//         props.infoTexte.map((infoText, index) => <p key={index}>{infoText}</p>)}
//     </div>
//   );
// };

// export default Card;
