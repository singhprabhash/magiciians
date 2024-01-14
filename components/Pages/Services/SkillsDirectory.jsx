import Tabs from '@components/components/UI/Tabs/Tabs';
import React from 'react'

const SkillsDirectory = () => {
  const tabs = [
    { label: "Front End", content: <p>Frontend.</p> },
    { label: "Backend", content: <p>Backend</p> },
    { label: "Devops", content: <p>Devops.</p> },
    { label: "Database", content: <p>Database.</p> },
    { label: "Infrastructure", content: <p>Infrastructure.</p> },
    { label: "Integrations", content: <p>Integrations.</p> },
  ];
  return (
    <div>
      SkillsDirectory
      <Tabs children={tabs}/>
    </div>
  )
}

export default SkillsDirectory