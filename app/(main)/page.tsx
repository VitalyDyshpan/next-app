import { UserShifts } from 'src/widgets/Shift/user-shifts'

export default function Home() {
  return (
    <>
      <div
        className="h-full flex justify-center"
      >
        <div
          className="max-w-600px w-full"
        >
          <UserShifts />
        </div>
      </div>
    </>
  )
}
