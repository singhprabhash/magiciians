export default function Contact() {
  return (
    <div className="mt-10 w-full md:w-8/12 mx-auto bg-[#FDD47A] flex items-center justify-center gap-10 px-10 h-[342px]">
      <h2 className="text-5xl text-black leading-relaxed w-8/12">
        Have an Awesome Idea?
        Validate with Us.
        Schedule a <b>free consultation.</b>
      </h2>

      <div className="circular_btn rounded-full bg-black w-[245px] h-[245px] relative">
        <div className="absolute translate-x-full translate-y-2/4">
          <p className="text-base text-white">Let's Start</p>
          <svg className="mt-5" xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
            <rect y="0.5625" width="80" height="80" rx="40" fill="white"/>
            <path d="M44.3376 34.4653H35.25C34.1723 34.4653 33.2986 33.5916 33.2986 32.5139C33.2986 31.4362 34.1723 30.5625 35.25 30.5625H49.0486C50.1263 30.5625 51 31.4362 51 32.5139V46.3126C51 47.3903 50.1263 48.264 49.0486 48.264C47.9709 48.264 47.0971 47.3903 47.0971 46.3126V37.225L33.3313 50.9909C32.5692 51.753 31.3335 51.753 30.5716 50.9909C29.8095 50.2288 29.8095 48.9932 30.5716 48.2312L44.3376 34.4653Z" fill="black"/>
          </svg>
        </div>
      </div>
    </div>
  )
}