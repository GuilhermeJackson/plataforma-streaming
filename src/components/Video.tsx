import { Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { PushSpinner } from "react-spinners-kit";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <PushSpinner size={150} color="#686769" />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div
          className="h-fill w-full max-w-[1100px] max-h-[60vh] aspect-video"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Player controls={true}>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
          </Player>
        </div>
      </div>
      <div className="p-6 max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-16 p-6">
          <div className="flex-1" data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-300 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-start gap-4 mt-6">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                ></img>
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div
            className="w-full md:w-[238px] flex flex-col gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://discord.gg/rocketseat"
              target="_blank"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>

            <a
              href="https://app.rocketseat.com.br/discover/course/especializar-react"
              target="_blank"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesso ao desafio
            </a>
          </div>
        </div>
        <div className="flex flex-col md: gap-8 mt-20 md:grid grid-cols-2">
          <a
            href="https://www.figma.com/file/qVfba7WEbFSatO6cnS1SjA/Plataforma-de-Evento---Ignite-Lab-(Community)?node-id=24%3A2&t=yVtewfBZEH3FyUXb-0"
            target="_blank"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 gover:bg-gray-600 transition-colors"
          >
            <div className="md: bg-green-700 md:h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href="https://www.figma.com/community/file/1102708662148116818"
            target="_blank"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 gover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 md:h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse para ter acesso aos wallpapers exclusivos do Ignite Lab e
                personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
