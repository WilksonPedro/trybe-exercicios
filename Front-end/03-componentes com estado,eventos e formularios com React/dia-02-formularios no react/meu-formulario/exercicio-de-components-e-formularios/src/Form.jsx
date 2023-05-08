import React from 'react'

export default function Form() {
  return (
    <>
        <span>Meu primeiro formulário:</span>
        <form className='form'>
            <label htmlFor="descricao">
            <textarea name="descrition" id="descrition" cols="30" rows="5" />
            <span>Vamos fazer uma breve descrição sobre o que vc gosta:</span>
            </label>
        </form>
    </>
  )
}
