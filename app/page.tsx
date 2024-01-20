import { Homepage } from "@/components/Homepage";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row bg-white">
      <Sidebar />
      <Homepage />
    </div>
  );
}
