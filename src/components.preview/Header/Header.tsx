import { Link, useLocation } from "react-router";

const NAV_LINKS = [
  { name: "Components", href: "/" },
  // { name: "Classes", href: "classes" },
  // { name: "Components", href: "components" },
  { name: "Palettes", href: "/palettes/" },
  // { name: "Contribute", href: "contribute" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky left-0 top-0 bg-secondary w-full backdrop-blur-sm z-50">
      <nav className="flex text-primary text-xl max-w-[1400px] mx-auto">
        {NAV_LINKS.map(({ name, href }) => {
          const isActive = location.pathname === href;
          const activeClass = isActive ? "text-white" : "text-gray";

          return (
            <Link
              key={name}
              to={href}
              className={`text-primary py-3 px-6 hover:text-white transition-colors ${activeClass}`}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
