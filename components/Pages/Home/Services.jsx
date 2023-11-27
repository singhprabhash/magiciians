'use client'

import MobileDevSvg from "@components/components/SVGs/MobileDevSvg";
import SeoSvg from "@components/components/SVGs/SeoSvg";
import WebDevSvg from "@components/components/SVGs/WebDevSvg";
import Card from "@components/components/UI/Card";
import { useState, useRef, useEffect } from "react";

const serviceData = [
  {
    "id": 1,
    "svg": <WebDevSvg />,
    "title": "Website Development",
    "content": `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a..`,
    "link": "Explore more"
  },
  {
    "id": 2,
    "svg": <MobileDevSvg />,
    "title": "Mobile Application Development",
    "content": `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a..`,
    "link": "Explore more"
  },
  {
    "id": 3,
    "svg": <SeoSvg />,
    "title": "SEO",
    "content": `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a..`,
    "link": "Explore more"
  },
  {
    "id": 4,
    "svg": <WebDevSvg />,
    "title": "Website Development",
    "content": `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a..`,
    "link": "Explore more"
  },
  {
    "id": 5,
    "svg": <WebDevSvg />,
    "title": "Website Development",
    "content": `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a..`,
    "link": "Explore more"
  },
  {
    "id": 6,
    "svg": <WebDevSvg />,
    "title": "Website Development",
    "content": `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a..`,
    "link": "Explore more"
  },
  {
    "id": 7,
    "svg": <WebDevSvg />,
    "title": "Website Development",
    "content": `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a..`,
    "link": "Explore more"
  }
]

const Services = () => {

  const [centerIndex, setCenterIndex] = useState(0);
  const cardListRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardListRef.current) {
        const cardContainer = cardListRef.current;
        const cardWidth = cardContainer.scrollWidth / serviceData.length;
        const centerCardIndex = Math.round(
          cardContainer.scrollLeft / cardWidth
        );
        setCenterIndex(centerCardIndex);
      }
    };
  
    const cardList = cardListRef.current;
  
    if (cardList) {
      cardList.addEventListener('scroll', handleScroll);
      handleScroll(); // Set initial center index
    }
  
    return () => {
      if (cardList) {
        cardList.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  return (
    <div className="services_container flex flex-col mt-10">
      <h1 className="uppercase text-5xl font-bold text-[#252525]">Services</h1>
      <div className="card-list w-full flex gap-5 flex-nowrap overflow-auto mt-10" ref={cardListRef}>
        {
          serviceData.map((data, index) => (
            <Card
              activeClass={index === centerIndex ? 'center-card' : ''}
              key={index} 
              serviceCard
              {...data}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Services;