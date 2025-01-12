const NAV_LINKS = [
  { name: "Overview", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Components", href: "/components" },
  { name: "Palettes", href: "/palettes" },
  { name: "Contribute", href: "/contribute" },
];

const Header = () => {
  return (
    <header className="bg-secondary rounded-xl py-3 px-6 text-xl fixed top-3 w-[80%] backdrop-blur-sm left-1/2 transform -translate-x-1/2 z-50 flex">
      <nav className="w-full flex gap-4 justify-around">
        {NAV_LINKS.map(({ name, href }) => (
          <a key={name} href={href} className="text-primary">
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
