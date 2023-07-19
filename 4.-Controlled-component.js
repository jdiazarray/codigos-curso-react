// Importamos useState desde la biblioteca 'react'
import { useState } from 'react'

const App = () => {
  // Inicializamos el estado de los campos del formulario
  const [form, setForm] = useState({ normal: '', text: '', select: '', check: false, estado: '' })

  // Función para manejar los cambios en los elementos del formulario
  const handleChange = ({ target }) => {
    // Actualizamos el estado del formulario
    // Si el tipo de entrada es 'checkbox', guardamos el valor 'checked'. De lo contrario, guardamos el valor 'value'
    setForm(state => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }))
  }

  // Función para manejar el evento de envío del formulario
  const submit = () => {
    // Imprimimos el estado del formulario en la consola
    console.log(form)
  }

  // Retornamos el objeto JSX que se renderizará
  return (
    <div>
      {/* Campo de texto normal */}
      <input onChange={handleChange} name='normal' value={form.normal}/>

      {/* Área de texto */}
      <textarea onChange={handleChange} name='text' value={form.text}/>

      {/* Campo de selección (dropdown) */}
      <select value={form.select} name='select' onChange={handleChange}>
        <option value=''>-- Seleccione --</option>
        <option value='chanchofeliz'>Chancho feliz</option>
        <option value='chanchitofeliz'>Chanchito feliz</option>
        <option value='chanchitotriste'>Chanchito triste</option>
        <option value='felipe'>Felipe</option>
      </select>

      {/* Checkbox */}
      <input
        type="checkbox"
        onChange={handleChange}
        name='check'
        checked={form.check}
      />

      {/* Botones de radio */}
      <div onChange={handleChange}>
        <label>Estado</label>
        <input type='radio' value='feliz' name='estado' /> Feliz
        <input type='radio' value='triste' name='estado' /> Triste
        <input type='radio' value='emocionado' name='estado' /> Emocionado
      </div>

      {/* Botón de envío */}
      <button onClick={submit}>Enviar</button>
    </div>
  )
}

// Exportamos el componente App como el valor predeterminado de este módulo
export default App
