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
    <nav className="flex-grow flex flex-col items-center w-[240px]">
      <div className="py-6 h-full w-full">
        {sections.map(({ id, name }) => (
          <div
            key={id}
            className={`cursor-pointer hover:underline text-lg px-6 leading-loose ${
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
