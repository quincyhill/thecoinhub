import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInput {
  timeFrame: string
  categories: string
  blockchain: string
}

const Form = () => {
  // NOTE: make this responsive
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const { timeFrame, categories, blockchain } = data

    console.log('timeFrame: ' + timeFrame)
    console.log('categories: ' + categories)
    console.log('blockchain: ' + blockchain)
  }

  return (
    <form
      className="flex flex-col justify-between p-3 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 flex flex-col md:flex-row">
        <div className="m-2">
          <select
            className="p-2.5 rounded-md bg-white border-2 border-slate-300"
            id="timeFrame"
            {...register('timeFrame')}
          >
            <option className="bg-white dark:bg-neutral-900" value="allTypes">
              Last 7 Days
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Last 24 Hours
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Last 30 Days
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              All Time
            </option>
          </select>
        </div>
        <div className="m-2">
          <select
            className="p-2.5 rounded-md bg-white border-2 border-slate-300"
            id="categories"
            {...register('categories')}
          >
            <option className="bg-white dark:bg-neutral-900" value="allMoods">
              All Moods
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Dark
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Happy
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Relaxed
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Soulful
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Bouncy
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Calm
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Confident
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Crunk
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Dirty
            </option>
            <option className="bg-white dark:bg-neutral-900" value="beats">
              Mellow
            </option>
          </select>
        </div>
        <div className="m-2">
          <select
            className="p-2.5 rounded-md bg-white border-2 border-slate-300"
            id="blockchain"
            {...register('blockchain')}
          >
            <option className="bg-white dark:bg-neutral-900" value="allGenres">
              All Chains
            </option>
            <option className="bg-white dark:bg-neutral-900" value="hipHop">
              Ethereum
            </option>
            <option className="bg-white dark:bg-neutral-900" value="rAndB">
              Solidity
            </option>
          </select>
        </div>
      </div>
    </form>
  )
}

export default Form
