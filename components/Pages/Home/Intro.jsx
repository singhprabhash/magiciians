import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="intro_title">
        <h1 className="intro_title-heading">Introduction To Best</h1>
        <h3 className="intro_title-subhead">Digital Agency</h3>
        <p className="w-3/4">
          Reference site about Lorem Ipsum, giving information on its
          origins, as well as a random Lipsum generator.
        </p>
      </div>
      <div className="w-full overflow-hidden relative lg:h-96 h-60 mt-5">
        <Image
          className="custom-img"
          src="/intro.png"
          objectFit="contain"
          alt="The Magicians intro"
          sizes="(max-width: 768px) 100vw"
          fill
        />
      </div>

      <div className="w-full flex gap-5 flex-nowrap overflow-auto brands mt-5">
        <div className="image-box inline-block relative mt-5">
          <Image
            src="/brand1.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="image-box inline-block relative mt-5">
          <Image
            src="/brand2.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="image-box inline-block relative mt-5">
          <Image
            src="/brand3.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="image-box inline-block relative mt-5">
          <Image
            src="/brand4.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="image-box inline-block relative mt-5">
          <Image
            src="/brand5.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="image-box inline-block overflow-hidden relative mt-5">
          <Image
            src="/brand5.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="image-box inline-block overflow-hidden relative mt-5">
          <Image
            src="/brand5.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="image-box inline-block overflow-hidden relative mt-5">
          <Image
            src="/brand5.png"
            objectFit="contain"
            alt="The Magicians intro"
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
