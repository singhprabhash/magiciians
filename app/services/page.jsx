'use client'

import { Section } from "@components/components/Pages/Services/section";
import { NavigationTab } from "@components/components/UI/Tabs/NavigationTab";
import { devSection, designSection, marketingSection } from "../../Data/ServicesData";
import { Button } from "@components/components/UI/Button";
import SkillsDirectory from "@components/components/Pages/Services/SkillsDirectory";
import Process from "@components/components/Pages/Services/Process";

export default function services() {
  return (
    <div className="service_wrapper">
      <NavigationTab
        href='/services' 
        title='services'
      />
      <Section 
        sectionId={devSection.sectionId}
        styles={{
          backgroundImage: 'url(/bg-triangle-transparent.svg)',
          backgroundPositionY: '-150px',
        }}
        classes={{
          wrapperClasses: 'mt-5',
          rightSectionOrder: 'order-0',
        }}
        subtitle={devSection.subtitle}
        title={devSection.title}
        content={devSection.content}
        button={
          <Button 
            href="/portfolio" 
            text='View Portfolio'
          />
        }
        cardData={devSection.cardData}
      />

      <Section
        styles={{
          backgroundImage: 'url(/bg-triangle-transparent-right.svg)',
          backgroundPositionY: '-130px',
          height: '400px'
        }}
        classes={{
          wrapperClasses: 'mt-[10rem]',
          rightSectionOrder: 'order-2',
        }}
        sectionId={designSection.sectionId}
        subtitle={designSection.subtitle}
        title={designSection.title}
        content={designSection.content}
        button={
          <Button 
            href="/portfolio" 
            text='View Portfolio'
          />
        }
        cardData={designSection.cardData}
      />

      <Section 
        sectionId={marketingSection.sectionId}
        styles={{
          backgroundImage: 'url(/bg-triangle-transparent.svg)',
          backgroundPositionY: '-150px',
        }}
        classes={{
          wrapperClasses: 'mt-[10rem]',
          rightSectionOrder: 'order-0',
        }}
        subtitle={marketingSection.subtitle}
        title={marketingSection.title}
        content={marketingSection.content}
        button={
          <Button 
            href="/portfolio" 
            text='View Portfolio'
          />
        }
        cardData={marketingSection.cardData}
      />
      <SkillsDirectory />
      <Process />
    </div>
  )
}