import Nav  from "@/components/aside/Nav";
import Header from "@/components/header/Header";
import Register from "@/components/register/Register";
import { perfil } from "@/db";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


type User = {
  nome: string;
  email: string;
  password: string;
  Ra: string;
  curso: string;
  cargo: string;
  semestre: string;
  periodo: string;
  duracao: string;
};

const Home = () => {
  const navegacao = useNavigate();
  const [use, setUse] = React.useState<User | null>(null); // Ajustei para aceitar null inicialmente
  
  const user = (email: string) => {
    const usuario = perfil.filter((elemento) => {
      return elemento.email == JSON.parse(email);
    });

    setUse(usuario[0]); // Ajuste para usar apenas o primeiro elemento
                       //tirando o array e pegando so o objeto, nao alterar se nao vai quebrar o codigo 
  };

  const verify = () => {
    const email = Cookies.get("emailAluno");
    if (!email) {
      return navegacao("/", { replace: true });
    }
    user(email);
  };

  function criarConta(event:any){
        console.log(event)
        console.log('arquivo Home.tsx linha 44')
  }

  useEffect(() => {
    verify();
  }, []);

  return (
    <>
      <Header />

      <div className={'w-full h-full grid grid-cols-4 gap-4 bg-zinc-200'}>
        <div className={'col-span-1'}>
        <Nav use={use}/>
        </div>
        <div className="col-span-3 w-full px-8 py-4">
            <Register criarConta={criarConta} />
    
        </div>
      </div>
     
    </>
  );
}

export default Home;
