import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = {
    use : {
    nome: string;
    email: string;
    password: string;
    Ra: string;
    curso: string;
    cargo: string;
    semestre: string;
    perildo: string;
    duracao: string;
    }
  };
export default function Nav({use}:User){

    return (
            <aside className="bg-blue-600 text-white w-full h-full flex flex-col justify-start p-2.5">
            <div className="flex flex-col items-center text-center mb-4">
            <Avatar className="w-20 h-20 mb-1.5">
                <AvatarImage
                src="https://i.pinimg.com/474x/8b/ff/4a/8bff4a7645a1a2f322e0add49180cef8.jpg"
                alt="Foto do Aluno"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="text-lg my-0.5">{use?.nome || "Nome do Aluno"}</h3>
            <p className="text-sm my-1.5">
                Curso: {use?.curso || "Sem curso"}
            </p>
            </div>

            <div className="bg-white h-px"></div>

            <div className="mt-2.5">
            <h4 className="text-lg mb-1.5">Informações</h4>
            <ul>
                <li className="mb-px">
                <a
                    href="#"
                    className="text-white text-base hover:underline"
                >
                    Item do Menu 1
                </a>
                </li>
                <li className="mb-px">
                <a
                    href="#"
                    className="text-white text-base hover:underline"
                >
                    Item do Menu 2
                </a>
                </li>
            </ul>
            </div>
            </aside>
    )
}
