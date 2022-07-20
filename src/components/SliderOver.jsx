import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SliderOver = ({ isOpen, handleClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            className="relative z-10"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ></motion.div>

            <div className="fixed inset-0 overflow-hidden">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className="absolute inset-0 overflow-hidden"
              >
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div className="pointer-events-auto relative w-screen max-w-md">
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={handleClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex h-full flex-col overflow-y-scroll bg-color-adventures py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <h2
                          className="text-xl font-semibold text-items-purple mb-2.5"
                          id="slide-over-title"
                        >
                          New Adventure
                        </h2>
                        <hr />
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="absolute inset-0 px-4 sm:px-6 flex flex-col justify-between">
                          <div>
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                              htmlFor="countries"
                              className="block mb-2 text-sm font-medium text-items-purple dark:text-gray-400"
                            >
                              Character
                            </label>
                            <select
                              id="countries"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Search by name</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                          </div>
                          <button className="bg-color-button text-button-light-gray font-semibold text-base py-2 rounded-full">
                            Create
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SliderOver
