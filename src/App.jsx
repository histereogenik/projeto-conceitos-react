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
      <h1>Olá, {pessoa.nome}</h1>
      {retornaNome()}
      <h2>subtitulo</h2>
      {estaDeDia ? 'Bom dia' : 'Boa Noite'}
      {estaDeDia && 'Bom dia'}
    </>
  )
}

export default App