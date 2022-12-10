import { CheckCircle, Lock } from 'phosphor-react'
import { LessonProps } from '../data/LessonProps'
import { isPast, format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableAtFormatted = format(props.availableAt, "EEEE' • ' d 'de'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableAtFormatted}
            </span>
            
            <div className={classNames(
                'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                    'bg-green-500' : isActiveLesson
                }
            )}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20} />
                        Conteúdo liberado
                    </span>
                    ) : (
                    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20} />
                        Em breve
                    </span>
                    )}
                    
                    <span className="text-xs rounded py-[0,125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}