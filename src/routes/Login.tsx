//como ainda nao ta usando route nao precisa importar o Reac ainda.
//import React from 'react'

import { Login as ComponentForm } from '@/components/form/FormControl'
import { useNavigate } from 'react-router-dom'

type Credencial = {
    email: string
    senha: string
}



const Login = () => {
    const navegacao = useNavigate()
    const handleLogin = (data: Credencial) => {
        console.log(data)

        //aqui entrara a validaçao futura, com o bdd, será enviado o arquivo JSON pra validação, como nao tem validação ainda, ta passando direto pra pagina aluno home.
        
        navegacao('/home', {replace: true, state: false})
    }

  return (
    <div className={'w-screen h-screen'}>
      <ComponentForm handleLogin={handleLogin}/>
    </div>
  )
}

export default Login
