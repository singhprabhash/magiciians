import CodingPracticeSvg from "@components/components/SVGs/CodingPracticeSvg";
import StarSvg from "@components/components/SVGs/StarSvg";
// import PriceSvg from "@components/components/SVGs/pricesvg";
import Star from "@components/components/UI/Star";



const About = () => {
  return (
    <div className="about-container h-auto">
      <div className="intro_title">
        <h1 className="intro_title-heading">How We Different</h1>
        <h3 className="intro_title-subhead">From Others</h3>
        <p className="w-3/4">
          Reference site about Lorem Ipsum, giving information on its
          origins, as well as a random Lipsum generator.
        </p>
      </div>

      <div className="flex stars-container justify-around items-center">
        <Star size="2xl" content="Best Coding practices" svg={<CodingPracticeSvg />} />
        <Star size="3xl" content="Experienced & high skill team" svg={<StarSvg />} />
        <Star size="2xl" content="Affordable price" svg={<StarSvg />} />
      </div>

      <div className="history justify-between items-center w-full md:w-8/12 my-8 mx-auto">
        <div className="first_card card w-full h-[300px]">
          <div className="card_number-title flex items-center justify-start">
            <div className="card_number font-bold">3+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Years
              <br />
              OF
              <br />
              HISTORY
            </div>
          </div>
          <div className="desc mt-4">
            <p className="text-sm md:text-base">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div>


        {/** second card */}
        <div className="card center h-[300px]">
          <div className="card_number-title  flex items-center justify-start">
            <div className="card_number font-bold">5+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Type of
              <br />
              Digital
              <br />
              Services
            </div>
          </div>
          <div className="desc mt-4">
            <p className="text-sm md:text-base">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div>
        {/** third card */}
        <div className="card right h-[300px]">
          <div className="card_number-title  flex items-center justify-end">
            <div className="card_number font-bold">25+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Happy
              <br />
              Clients
            </div>
          </div>
          <div className="desc mt-4 ">
            <p className="text-sm md:text-base">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div>
      </div>
      <div className="history2 justify-between items-center w-full md:w-8/12 my-8 mx-auto">
        {/** fourth card */}
        <div className="card left h-[250px]">
          <div className="card_number-title  flex items-center justify-start">
            <div className="card_number font-bold">40+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Projects
              <br />
              Delivered
            </div>
          </div>
          <div className="desc mt-4">
            <p className="text-sm md:text-base">
              lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        </div>
        {/** testimonial */}
        {/* <div className="testimonial">
          <div className="card_number-title  flex items-center justify-start">
            <div className="card_number font-bold">3+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Years
              <br />
              OF
              <br />
              HISTORY
            </div>
          </div>
          <div className="desc">
            <p className="text-sm">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About;