import {useEffect} from 'react'
import Cookie  from 'js-cookie'
import { Login as ComponentForm } from '@/components/form/FormControl'
import {  useNavigate } from 'react-router-dom'

type Credencial = {
    email: string
    password: string
}



const Login = () => {
    const navegacao = useNavigate()

    const handleLogin = ({email, password}: Credencial) => {
      console.log(password)
       Cookie.set('emailAluno', JSON.stringify(email))
        navegacao('/home', {replace: true})
    }

    useEffect(() => {
      if(Cookie.get('emailAluno')){
        navegacao('/home', {replace: true})
      }
    }, [])
    


  return (
    <div className={'w-screen h-screen'}>
      <ComponentForm handleLogin={handleLogin}/>
    </div>
  )
}

export default Login
