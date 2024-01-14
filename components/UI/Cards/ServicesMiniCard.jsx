export const ServicesMiniCard = ({ icon, text }) => (
  <div className="services_mini_card w-[150px] h-[120px] flex flex-col justify-center items-center text-center p-2">
    <div className="h-auto w-auto">{icon}</div>
    <h6 className="mt-2">{text}</h6>
  </div>
)