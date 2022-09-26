import { withSession } from "../lib/withSession";

export default function Home(props) {
  const { user } = props;

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {user ? `You are logged in with: ${user.user_id}` : 'You are not authenticated'}
        </h2>
      </div>
    </div>
  </div>
  )
}

export const getServerSidePropsHandler = async ({req}) => {
  const user = req.session.get('user') ?? null;
  const props = {user};
  return {props};
}

export const getServerSideProps = withSession(getServerSidePropsHandler);
