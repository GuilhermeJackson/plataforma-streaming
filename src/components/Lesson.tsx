import { CheckCircle, Lock } from "phosphor-react";
import { LessonProps } from "../data/LessonProps";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableAtFormatted = format(
    props.availableAt,
    "EEEE' • ' d 'de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <>
      {isLessonAvailable ? (
        <div>
          <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">{availableAtFormatted}</span>

            <div
              className={classNames(
                "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ",
                {
                  "bg-green-500": isActiveLesson,
                }
              )}
            >
              <header className="flex items-center justify-between">
                <span
                  className={classNames(
                    "text-sm font-medium flex items-center gap-2",
                    {
                      "text-white": isActiveLesson,
                      "text-blue-500": !isActiveLesson,
                    }
                  )}
                >
                  <CheckCircle size={20} />
                  Conteúdo liberado
                </span>

                <span
                  className={classNames(
                    "text-xs rounded py-[0,125rem] px-2 text-white border border-green-300 font-bold",
                    {
                      "border-white": isActiveLesson,
                      "border-green-300": !isActiveLesson,
                    }
                  )}
                >
                  {props.type == "live" ? "AO VIVO" : "AULA PRÁTICA"}
                </span>
              </header>
              <strong
                className={classNames("mt-5 block", {
                  "text-white": isActiveLesson,
                  "text-gray-200": !isActiveLesson,
                })}
              >
                {props.title}
              </strong>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <div className="cursor-not-allowed hover:not:border-green-500 focus:outline-none opacity-30">
            <span className="text-gray-300 cursor-not-allowed">
              {availableAtFormatted}
            </span>

            <div
              className={classNames(
                "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ",
                {
                  "bg-green-500": isActiveLesson,
                }
              )}
            >
              <header className="flex items-center justify-between">
                <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                  <Lock size={20} />
                  Em breve
                </span>
                <span
                  className={classNames(
                    "text-xs rounded py-[0,125rem] px-2 text-white border border-green-300 font-bold",
                    {
                      "border-white": isActiveLesson,
                      "border-green-300": !isActiveLesson,
                    }
                  )}
                >
                  {props.type == "live" ? "AO VIVO" : "AULA PRÁTICA"}
                </span>
              </header>
              <strong
                className={classNames("mt-5 block", {
                  "text-white": isActiveLesson,
                  "text-gray-200": !isActiveLesson,
                })}
              >
                {props.title}
              </strong>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
