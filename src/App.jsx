import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const nome = 'gian';

  function retornaNome() {
    return nome;
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = false;

  return (
    <>
      <Perfil nome="humberto" endereco="https://github.com/histereogenik.png"/>
      <h1>Olá, {pessoa.nome}</h1>
      {retornaNome()}
      <h2>subtitulo</h2>
      {estaDeDia ? 'Bom dia' : 'Boa Noite'}
      {estaDeDia && 'Bom dia'}
      <Formulario />
    </>
    
  )
}

export default App