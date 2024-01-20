import GitHubSupport from "@/components/GithubSupport";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="flex flex-row bg-white">
            <Sidebar />
            <GitHubSupport />
        </div>
    );
}
