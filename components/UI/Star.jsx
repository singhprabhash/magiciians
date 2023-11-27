



const Star = ({ content, svg }) => {
  const isCenter = content === "Experienced & high skill team";
  return(
  <div className={`star ${isCenter ? 'text-3xl h-[500px] w-[500px]' : 'text-2xl h-[400px] w-[400px]'}`}>
    <div className="relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {svg}
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="white" className="text-sm mt-2">
          {content}
        </text>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24" fill="black">
        <path d="M12 2L9 8l-7.5.5 5 5-1.5 7L12 16l6.5 4.5-1.5-7 5-5L15 8l-3-6z" />
      </svg>
    </div>
  </div>)
};


export default Star;