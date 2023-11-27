import classNames from "classnames";

const Card = ({
  serviceCard,
  svg,
  title,
  content,
  link,
  activeClass
}) => {

  // useEffect(() => {
    
  // }, [props.serviceCard]);
  let defaultClasses = {
    main: "flex flex-col card items-center justify-center py-10 px-5",
    img: "card_img rounded-full w-20",
    title: "font-semibold text-xl mt-4",
    content: "text-base font-normal text-center mt-4"
  }
  if(serviceCard) {

  }

  return (
    <div className={classNames(defaultClasses.main, activeClass)}>
      <div className={defaultClasses.img}>
        {svg}
      </div>
      <div className="card_title">
        <h3 className={defaultClasses.title}>{title}</h3>
      </div>
      <div className="card_content">
        <p className={defaultClasses.content}>{content}</p>
      </div>
    </div>
  )
}

export default Card;