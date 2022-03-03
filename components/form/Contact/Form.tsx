import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInput {
  name: string
  email: string
  subject: string
  message: string
  terms: boolean
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    // only send over the username and password, remember me is just for local stuff so they are saved in the browser
    console.log('name: ' + data.name)
    console.log('email: ' + data.email)
    console.log('subject: ' + data.subject)
    console.log('message: ' + data.message)
    console.log('terms: ' + data.terms)

    // Say thanks for the message and redirect to the home page after 3 seconds
    // Redirect after like 3 seconds
  }
  return (
    <form
      className="w-80 flex flex-col justify-between p-3 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-transparent rounded-lg block w-full p-2.5"
          required
          {...register('name')}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-transparent rounded-lg block w-full p-2.5"
          placeholder="user@mail.com"
          required
          {...register('email')}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-transparent rounded-lg block w-full p-2.5"
          required
          {...register('subject')}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-transparent rounded-lg block w-full p-2.5"
          required
          {...register('message')}
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            className="w-4 h-4 bg-neutral-50 rounded border border-neutral-300 focus:ring-3 focus:ring-sky-500 "
            {...register('terms')}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="remember" className="font-medium ">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-sky-500 focus:ring-4 focus:ring-sky-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  )
}

export default Form
