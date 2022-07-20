import React, { useState } from 'react'
import { FormContext } from './FormContext'

const FormProvider = ({ children }) => {
  const [state, setState] = useState({
    adventure_name: '',
    origin: '',
    destination: '',
    name: '',
    race: '',
  })

  // const [form, setForm] = useState({
  //   adventure_name: '',
  //   origin: '',
  //   destination: '',
  //   name: '',
  //   race: '',
  // })

  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
