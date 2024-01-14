import Link from "next/link";

export const NavigationTab = ({ href, title }) => {
  return (
    <div className="nav_tab">
      <span className="mr-2 text-sm capitalize">
        <Link href="/">home</Link>
      </span>
      <span>|</span>
      <span className="ml-2 text-sm active capitalize">
        <Link href={href}>{ title }</Link>
      </span>
    </div>
  );
}