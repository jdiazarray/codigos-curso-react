//Definición del componente App
const App = () => {
  //Función ejecutada al enviar el formulario
  const submit = (e) => {
    //Previene la acción por defecto del formulario, que es recargar la página.
    e.preventDefault()
    //Crea un objeto FormData y lo convierte a un array para luego convertirlo en un objeto regular
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data))
    //Aquí se encuentra un ciclo for...of comentado que recorre cada entrada del objeto FormData y la imprime en la consola
    //for(let [key, value] of data) {
      //console.log(key, value)
    //}
  }

  //El componente retorna un formulario con inputs
  return (
    <form onSubmit={submit}>
      <div>
        <span>lala</span>
        <input name='campo'/>
      </div>
      <input name='lele'/>
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default App

