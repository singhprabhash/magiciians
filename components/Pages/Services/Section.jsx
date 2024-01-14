import { ServicesMiniCard } from '@components/components/UI/Cards/ServicesMiniCard';
import { inter } from '../../../utils';
import classNames from "classnames";

export const Section = ({ 
  subtitle, 
  title,
  content,
  cardData,
  sectionId,
  button,
  classes,
  styles
}) => {

  return(
    <div style={styles} className={classNames('section_wrapper', 'w-full', 'p-5', classes.wrapperClasses)} id={sectionId}>
      <div className="section_container md:w-11/12 md:mx-auto justify-between items-start">
        <div className={`section_left ${classes.rightSectionOrder}`}>
          <h5 className={`uppercase text-[#FB6E3B] ${inter.className}`}>{subtitle}</h5>
          <h1 className="uppercase">{title}</h1>
          <p className="text-sm mt-5">
            {content}
          </p>
          {button}
        </div>
        <div className="section_right">
          {
            cardData.map((data, idx) => (
              <ServicesMiniCard 
                key={idx}
                icon={data.svg} 
                text={data.text}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}