type NavSection = {
  id: string;
  name: string;
};

type Props = {
  sections: NavSection[];
  setSelectedSection: (id: string) => void;
};

const Navbar = ({ sections, setSelectedSection }: Props) => {
  return (
    <nav className="flex-grow bg-sky-900 flex flex-col justify-center items-center">
      {sections.map(({ id, name }) => (
        <div
          className="px-4 py-2 bg-black w-56 text-center cursor-pointer"
          onClick={() => setSelectedSection(id)}
        >
          <span>{name}</span>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
