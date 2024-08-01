import { ILeistungen } from '@/assets/dataArrays/leistungen';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Card = ({ title, items, faIcon }: ILeistungen) => {
  return (
    <div
      className="m-4 flex flex-col rounded-lg p-4 shadow-md shadow-lblue"
      key={title}>
      <FontAwesomeIcon
        icon={faIcon}
        className="w-12 place-self-center text-dblue"
      />
      <h2 className="my-2 text-pretty text-center text-[1.3rem] font-semibold text-dblue underline decoration-lblue underline-offset-[7px]">
        {title}
      </h2>
      <ul className="fa-ul mt-">
        {items.map((item, index) => (
          <li key={item + index} className="flex flex-row text-pretty">
            <span className="fa-li">
              {
                <FontAwesomeIcon
                  className="mr-1 mt-[0.2rem] w-[1rem] text-lblue"
                  icon={faPaw}
                />
              }
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
