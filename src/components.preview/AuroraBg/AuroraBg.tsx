import { Aurora } from "../../components/Background";

const AuroraBg = () => {
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <Aurora title="light" theme="light" />
      <Aurora title="dark" theme="dark" />
    </div>
  );
};

export default AuroraBg;
