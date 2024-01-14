import Link from "next/link";

export const Button = ({ href, text }) => (
  <Link href={href} className="">
    <button className="p-3 mt-5 max-w-xs rounded-3xl bg-[#FB6E3B]">{text}</button>
  </Link>
)