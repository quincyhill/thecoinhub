import { useForm, SubmitHandler } from 'react-hook-form'
import { Search } from 'react-bootstrap-icons'

interface FormInput {
  query: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('query: ' + data.query)
  }

  return (
    <form
      className="sm:w-full flex flex-row text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        id="name"
        className="w-full bg-white  border border-slate-300  rounded-lg block p-2.5"
        required
        placeholder="Search Items, collections, and accounts"
        {...register('query')}
      />
      <button
        type="submit"
        className="focus:ring-4 font-medium rounded-lg text-sm pl-2"
      >
        <Search className="w-6 h-6" />
      </button>
    </form>
  )
}

export default Form
