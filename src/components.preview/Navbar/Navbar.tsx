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
    <div className="w-72 sticky top-20 left-0 h-full">
      <nav className="">
        <div className="">
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
    </div>
  );
};

export default Navbar;
