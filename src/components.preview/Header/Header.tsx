import { Link } from "react-router";

const NAV_LINKS = [
  { name: "Components", href: "/" },
  // { name: "Classes", href: "classes" },
  // { name: "Components", href: "components" },
  { name: "Palettes", href: "/palettes/" },
  // { name: "Contribute", href: "contribute" },
];

const Header = () => {
  return (
    <header className="bg-secondary rounded-lg py-3 px-6 text-xl fixed top-3 w-[80%] backdrop-blur-sm left-1/2 transform -translate-x-1/2 z-50 flex">
      <nav className="w-full flex gap-4 justify-around text-primary">
        {NAV_LINKS.map(({ name, href }) => (
          <Link key={name} to={href} className="text-primary">
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
