import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscribeMutation } from "../graphql/generated";

export function Subscribe() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscribeMutation();

    async function handleSubscribe(event: FormEvent) {
        event?.preventDefault();
        await createSubscriber({
            variables: {
                name,
                email
            }
        })
        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="px-0 flex flex-col md:flex-row items-center justify-between mt-20 md:px-6 mx-auto">
                <div className="px-5 text-sm text-center md:text-left md:px-5  max-w-[640px] ">
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="w-full p-6 mt-6 md:p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded border-gray-900 px-5 h-14 placeholder-gray-300 
                            focus:outline-0 focus:border focus:ring-green-300 focus:border-green-300
                            hover:border-green-300 hover:border
                            invalid:text-red-500 focus:invalid:border-red-500
                            transition-all duration-500 ease-in-out
                            text-sm
                            lg:text-[100%]
                            "
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => {setName( event.target.value )}}>
                        </input>
                        <input
                            className="bg-gray-900 rounded border-gray-900 px-5 h-14 placeholder-gray-300 
                            focus:outline-0  focus:border focus:ring-green-300 focus:border-green-300
                            hover:border-green-300 transition-all duration-500 ease-in-out hover:border
                            invalid:text-red-500 focus:invalid:border-red-500
                            text-sm
                            lg:text-[100%]
                            "
                            type="email" 
                            placeholder="Digite seu e-mail"
                            onChange={event => {setEmail( event.target.value )}}>
                        </input>
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-5 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                                Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className="mt-10" alt=""></img>
        </div>
    )
}