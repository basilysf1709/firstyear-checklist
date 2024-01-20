import GitHubSupport from "@/components/GithubSupport";
import { Homepage } from "@/components/Homepage";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="flex flex-row bg-gray-200">
            <Sidebar />
            <GitHubSupport />
        </div>
    );
}
