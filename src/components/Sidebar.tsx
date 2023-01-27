import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-full xl:w-[348px] bg-gray-700 p-6 border-l rounded-lg border-gray-600 h-[116.5vh] overflow-y-scroll sidebar ">
      <span
        className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        Cronograma de aulas
      </span>
      <div
        className="flex flex-col gap-8"
        data-aos="fade-left"
        data-aos-delay="700"
      >
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
