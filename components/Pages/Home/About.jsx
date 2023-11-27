import CodingPracticeSvg from "@components/components/SVGs/CodingPracticeSvg";
import StarSvg from "@components/components/SVGs/StarSvg";
// import PriceSvg from "@components/components/SVGs/pricesvg";
import Star from "@components/components/UI/Star";



const About = () => {
  return (
    <div className="about-container h-screen">
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

      <div className="history flex flex-wrap gap-5 px-5 justify-between items-center">
        <div className="first_card card">
          <div className="card_number-title flex items-center justify-start">
            <div className="card_number text-4xl font-bold">3+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Years
              <br />
              OF
              <br />
              HISTORY
            </div>
          </div>
          <div className="desc mt-4">
            <p className="text-sm">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div>


        {/** second card */}
        <div className="card center">
          <div className="card_number-title  flex items-center justify-start">
            <div className="card_number text-4xl font-bold">3+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Years
              <br />
              OF
              <br />
              HISTORY
            </div>
          </div>
          <div className="desc mt-4">
            <p className="text-sm">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div>
        {/** third card */}
        <div className="card right">
          <div className="card_number-title  flex items-center justify-start">
            <div className="card_number text-4xl font-bold">3+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Years
              <br />
              OF
              <br />
              HISTORY
            </div>
          </div>
          <div className="desc mt-4">
            <p className="text-sm">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div>
        {/** fourth card */}
        <div className="card left">
          <div className="card_number-title  flex items-center justify-start">
            <div className="card_number text-4xl font-bold">3+</div>
            <div className="card-title text-3xl ml-3 font-bold">
              Years
              <br />
              OF
              <br />
              HISTORY
            </div>
          </div>
          <div className="desc mt-4">
            <p className="text-sm">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
          </div>
        </div>
        {/** testimonial */}
        {/* <div className="testimonial">
          <div className="card_number-title  flex items-center justify-start">
            <div className="card_number text-4xl font-bold">3+</div>
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