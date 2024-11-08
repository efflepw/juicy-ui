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
      <div className="bg-lightdark rounded-xl py-6 px-8 h-full w-full">
        {sections.map(({ id, name }) => (
          <div
            className="cursor-pointer hover:underline text-lg leading-relaxed"
            onClick={() => setSelectedSection(id)}
          >
            <span
              className={`${
                activeId == id ? "text-white underline" : "text-gray"
              }`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
