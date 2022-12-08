import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
        <div>
            <Header/>
            <main className="flex">
                <Video/>
                <Sidebar/>
            </main>
        </div>
    )
}