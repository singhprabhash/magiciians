import { ProcessSvg } from "@components/components/SVGs/ProcessSvg"
import ProcessCards from "@components/components/UI/Cards/ProcessCards"
import Headers from "@components/components/UI/Headers/Headers"

let title = 'Process'
let content = 'A skilled software development team is the most vital part of the success of any business. And we put together the best professionals!'

let processData = [
  {
    title: 'Discovery',
    svg: <ProcessSvg />,
    content: 'In this step, we actively learn about the needs and goals of the project and thoroughly discuss various solutions and directions to take.'
  },
  {
    title: 'Design',
    svg: <ProcessSvg />,
    content: 'This phase focuses on the creative visual aspect, starting with sketches & wireframes and progressing to the final design of branding or website.'
  },
  {
    title: 'Development',
    svg: <ProcessSvg />,
    content: 'This step involves the technical side, including developing the design of the website on the platform or creating sketches for branding.'
  },
  {
    title: 'Launch',
    svg: <ProcessSvg />,
    content: 'The final step includes completing any necessary revisions, user testing, bug fixes, training, and delivering the product to the client.'
  }
]

const Process = () => {
  return (
    <div className='process_wrapper px-5'>
      <Headers 
        title={title} 
        content={content}
      />
      <ProcessCards children={processData}/>
    </div>
  )
}

export default Process