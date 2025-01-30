type NavSection = {
  id: string;
  name: string;
};

type Props = {
  activeId: string;
  sections: NavSection[];
  setSelectedSection: (id: string) => void;
};

const Navbar = ({ activeId, sections, setSelectedSection }: Props) => {
  return (
    <nav className="flex-grow flex flex-col items-center bg-[#0c0c0c] rounded-md">
      <div className="py-6 h-full w-full">
        {sections.map(({ id, name }) => (
          <div
            key={id}
            className={`cursor-pointer text-lg px-6 rounded-md leading-loose hover:bg-lightdark ${
              activeId == id
                ? "text-white bg-lightdark rounded-md"
                : "text-gray"
            }`}
            onClick={() => setSelectedSection(id)}
          >
            <span>{name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
