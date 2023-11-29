import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="mt-10 portfolio_container w-full md:w-8/12 mx-auto">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-medium capitalize">Visit Our Portfolio</h1>
        <p className="text-lg">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
      </div>

      <div className="portolio_info">
        <div className="portfolio_first-row flex items-center justify-between gap-8">
          <div className="title_card w-10/12 bg-black p-5">
            <h2 className="title text-2xl">Workshalas</h2>
            <p className="mt-5">Workshala is a vibrant coworking space to be in love with what you do. We know what it takes to be more productive for corporates, budding freelancers & startups to set up the ventures.At Workshala, Feel the environment of Positive coworking and give us a chance to help you with the best coworking space in Noida.</p>
          </div>
          <div className="img_card inline-block overflow-hidden relative mt-10 w-2/4">
            <div className="explore_btn">Explore More</div>
            <img
              className="w-full"
              src="/portfolio1.png"
              alt="Workshalas"
            />
          </div>
        </div>
        <div className="portfolio_second-row flex items-center justify-between gap-8 flex-row-reverse mt-10">
          <div className="title_card w-10/12 bg-black p-5">
            <h2 className="title text-2xl">Workshalas</h2>
            <p className="mt-5">Workshala is a vibrant coworking space to be in love with what you do. We know what it takes to be more productive for corporates, budding freelancers & startups to set up the ventures.At Workshala, Feel the environment of Positive coworking and give us a chance to help you with the best coworking space in Noida.</p>
          </div>
          <div className="img_card inline-block overflow-hidden relative mt-10 w-2/4">
            <div className="explore_btn">Explore More</div>
            <img
              className="w-full"
              src="/portfolio2.png"
              alt="Workshalas"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="explore bg-[#FB6E3B]">Explore More</div>
      </div>
    </div>
  )
}