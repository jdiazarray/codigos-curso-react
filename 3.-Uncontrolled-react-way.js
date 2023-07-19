import { useRef } from 'react'

//Definición del componente App
const App = () => {
  //Creación de las referencias utilizando useRef, útil para acceder directamente a los elementos del DOM.
  const input = useRef()
  const file = useRef()

  //Función ejecutada al hacer click en el botón Enviar
  const submit = () => {
    //Imprime en consola el valor del input de texto y el primer archivo seleccionado
    console.log(input.current.value)
    console.log(file.current.files[0])
    //Crea un objeto FormData y añade el valor del input y el archivo
    const form = new FormData()
    form.append('archivo', file.current.files[0])
    form.append('input', input.current.value)
    //Realiza una petición POST al servidor con los datos del formulario
    fetch('/lala', { method: 'POST', body: form })
  }

  //El componente retorna un formulario con inputs
  return (
    <div>
      <div>
        <span>lala</span>
        <input defaultValue='defecto' type='text' name='campo' ref={input} />
        <input type='file' ref={file} />
      </div>
      <input type='submit' value='Enviar' onClick={submit} />
    </div>
  )
}

export default App
