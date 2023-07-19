import { useRef } from 'react'

//Definición del componente App
const App = () => {
  //Creación de las referencias utilizando useRef, útil para acceder directamente a los elementos del DOM.
  const input = useRef()
  const tarea = useRef()
  const file = useRef()

  //Función ejecutada al enviar el formulario
  const submit = (e) => {
    //Previene la acción por defecto del formulario, que es recargar la página.
    e.preventDefault()
    //Crea un objeto FormData que permite trabajar con datos del formulario
    const form = new FormData(e.target)
    //Agrega el primer archivo seleccionado en el input de archivo al objeto FormData
    form.append('archivo', file.current.files[0])
    //Imprime en la consola el contenido del objeto FormData
    console.log(Array.from(form))
  }

  //El componente retorna un formulario con inputs
  return (
    <form onSubmit={submit}>
      <div>
        <span>lala</span>
        <input defaultValue='defecto' type='text' name='campo' ref={input} />
        <input type='file' ref={file} />
        <textarea name='textarea' ref={tarea} />
      </div>
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default App
