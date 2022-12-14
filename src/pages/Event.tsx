import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useGetLessonFirstBySlugQuery } from "../graphql/generated";

export function Event() {
    const { slug } = useParams<{slug: string}>()
    const { data } = useGetLessonFirstBySlugQuery()
    let firstScreen = ''
    data?.lessons.map(lesson => {
        firstScreen = lesson.slug
    })
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                <Video lessonSlug={!slug ? firstScreen : slug} /> 
                <div className="hidden xl:flex flex-initial">
                    <Sidebar/>
                </div>
            </main>
        </div>
    )
}