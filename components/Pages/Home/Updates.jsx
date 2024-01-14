import UpdatesCard from "@components/components/UI/Cards/UpdatesCard";

export default function Updates() {
  return(
    <div className="updates_wrapper w-full md:w-8/12 mx-auto mt-10">
      <div className="header flex flex-col justify-center items-center">
        <h1 className="text-5xl font-medium capitalize">Our Updates</h1>
        <p className="text-lg">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
      </div>
      <div className="updates_work mt-10">
        <UpdatesCard src="/updates1.jpeg"/>
        <UpdatesCard src="/updates2.png"/>
        <UpdatesCard src="/updates3.png"/>

      </div>
    </div>
  )
}