import Link from 'next/link'
import type { User } from '../../../lib/types'

interface Props {
  user: User
}

const AvatarLink = ({ user }: Props) => {
  const { username, displayName, href, uuid } = user
  return (
    <Link href="/">
      <a className="flex flex-row p-2 items-center hover:bg-slate-100 rounded-md">
        <img
          className="bg-green-200 h-12 w-12 mr-2 rounded-full "
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">{username}</span>
          <span className="text-sm text-slate-500">{displayName}</span>
        </div>
      </a>
    </Link>
  )
}

export default AvatarLink
