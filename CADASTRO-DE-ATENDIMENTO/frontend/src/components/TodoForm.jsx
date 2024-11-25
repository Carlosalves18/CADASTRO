import React from 'react'
import axios from 'axios'
import {Button, Form } from "./styled.js"

const CadasForm = () => {

    const [sagentCabo, setSagentCabo] = React.useState(" ")
    const [equipe, setEquipe] = React.useState(" ")
    const [concluido, setConcluido] = React.useState(false)
    const [solucaoAplic, setSAplic] = React.useState(" ")
    const [message, setMessage] = React.useState(" ")
    const [loading, setLoading] = React.useState(" ")

    const handlePost = async (event) => {

      event.preventDefault();

        setLoading("Carregando...")

        const select = document.getElementById("concluido")
        setConcluido(eval(select.options[select.selectedIndex].value))
        try {

            await axios.post("http://localhost:7777/api/cadas", {
                sagentCabo, 
                equipe,
                concluido,
                solucaoAplic

            })
            setMessage("Cadastro adicionado com sucesso!")
            setSagentCabo('')
            setEquipe('')
            setConcluido('')
            setSAplic('')
        } catch (error) {
            setMessage("Não foi possível adicionar esse cadastro!")
            console.error(error)
        }
    }

    console.log(concluido)

  return (
    <Form onSubmit={handlePost}>
    
        <h3>
        Nome do Sargento ou Cabo
        </h3>
        <input 
            type="text" 
            placeholder="Digite o nome do Sargento ou do Cabo" 
            value={sagentCabo}
            onChange={(e) => setSagentCabo(e.target.value)}
            required />

     
        <h3>Equipe</h3>
        <input 
            type="text" 
            placeholder="Digite o nome da equipe"
            value={equipe}
            onChange={(e) => setEquipe(e.target.value)}
            />

        <h3>Concluido</h3>
        <select name="concluido" id="concluido">
          <option value="true" >sim</option>
          <option value="false">não</option>
        </select>
        {/* <Form.Control 
            type="text" 
            placeholder="Sim / Não"
            value={concluido}
            onChange={(e) => setConcluido(e.target.value)}
            /> */}

        <h3>Qual foi a solução aplicada?</h3>
        <input 
            type="textarea" 
            placeholder="Digite qual foi a solução aplicada"
            value={solucaoAplic}
            onChange={(e) => setSAplic(e.target.value)}
            />


      <Button type="submit">
        ENVIAR
      </Button>
      {message ? <p>{message}</p> : <p>{loading}</p>}
    </Form>
  
  )
}

export default CadasForm;