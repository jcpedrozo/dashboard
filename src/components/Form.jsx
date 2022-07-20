import React, { useContext, useState } from 'react'
import { FormContext } from '../context/FormContext'
import useFetch from '../hooks/useFetch'

const Form = () => {
  const data = useFetch('/character')
  // console.log(data)
  const { state, setState } = useContext(FormContext)

  const [form, setForm] = useState({
    adventure_name: '',
    origin: '',
    destination: '',
    name: '',
    race: '',
  })

  const { adventure_name, origin, destination, name, race } = form

  const handleForm = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const save = e => {
    e.preventDefault()

    setState({
      adventure_name: adventure_name,
      origin: origin,
      destination: destination,
      name: name,
      race: race,
    })

    setForm({
      adventure_name: '',
      origin: '',
      destination: '',
      name: '',
      race: '',
    })
  }

  return (
    <>
      <form onSubmit={save}>
        <h2
          className="text-lg font-semibold text-text-adventures mb-4"
          id="slide-over-title"
        >
          About Adventure
        </h2>
        <div className="mb-3.5">
          <label
            htmlFor="adventure_name"
            className="block mb-2 text-sm font-normal text-items-purple dark:text-gray-300"
          >
            Adventure name
          </label>
          <input
            type="text"
            id="adventure_name"
            name="adventure_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={adventure_name}
            onChange={handleForm}
            autoComplete="off"
            required
          />
        </div>

        <div className="flex justify-end items-center mb-3.5">
          <div className="flex items-center"></div>
          <span className="rounded-full bg-text-adventures w-3 h-3 mr-2.5"></span>
          <div className="w-4/5">
            <label
              htmlFor="origin"
              className="block mb-2 text-sm font-normal text-items-purple dark:text-gray-300"
            >
              Origin
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={origin}
              onChange={handleForm}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex justify-end items-center mb-11">
          <span className="rounded-full bg-text-adventures w-3 h-3 mr-2.5"></span>
          <div className="w-4/5">
            <label
              htmlFor="destination"
              className="block mb-2 text-sm font-normal text-items-purple dark:text-gray-300"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={destination}
              onChange={handleForm}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <h2
          className="text-lg font-semibold text-text-adventures mb-4"
          id="slide-over-title"
        >
          About Adventure
        </h2>

        <label
          htmlFor="characters"
          className="block mb-2 text-sm font-medium text-items-purple dark:text-gray-400"
        >
          Character
        </label>
        <select
          id="characters"
          name="name"
          value={name}
          onChange={handleForm}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue="">Filter by Character</option>
          {data &&
            data.map(x => (
              <option value={x.name} key={x.id}>
                {x.name}
                {' - '}
                {x.race}
              </option>
            ))}
        </select>
        <button className="mt-12 bg-color-button text-button-light-gray font-semibold text-base py-2 rounded-full w-full">
          Create
        </button>
      </form>
    </>
  )
}

export default Form
