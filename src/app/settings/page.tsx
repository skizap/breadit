import { UserNameForm } from '@/components/UserNameForm'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
}

export default function SettingsPage() {
  return (
    <div className='max-w-4xl mx-auto py-12'>
      <div className='grid items-start gap-8'>
        <h1 className='font-bold text-3xl md:text-4xl'>Settings</h1>

        <div className='grid gap-10'>
          <UserNameForm user={{ id: 'mock-id', username: 'guest' }} />
        </div>
      </div>
    </div>
  )
}
