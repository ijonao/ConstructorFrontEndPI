type Propriedade = {
    stylecss?: string
}
import Logo from '@/assets/images/academitrack-logo.png'

const Header = (propriedade: Propriedade) => {

    //const perfil = () => {  
    //ia ser listado pra listar o perfil na barra lateral da esquerda, fica pra dps ou nao
    // }  
    return (
      <header className={'h-20 bg-black flex flex-row items-center justify-between px-4'}>
      <img className='w-20' src={Logo} alt='Logo' title='Logo da Acami Track'/>
      
      <div>
      <p className={'text-white'}>Sistema de gestão academica <br/>Projeto Interdiciplinar 2º semestre 2024
      </p>

      </div>
      
      <span>
          <p className={'text-white'}> Academi <span className={'text-blue-700 font-bold text-xl'}>Tracker</span></p>
      </span>

    </header>
  )
}

export default Header
