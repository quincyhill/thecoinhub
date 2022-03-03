import { RankingsForm } from '../components/form'

export default function RankingsPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center mt-4">
        <h1 className="font-semibold text-4xl m-4">Top NFTs</h1>
        <p className="text-slate-500 m-4">
          The top NFTs on The Coinhub, ranked by volume, floor prices and other
          stats
        </p>
      </section>
      <section>
        <RankingsForm />
      </section>
    </div>
  )
}
