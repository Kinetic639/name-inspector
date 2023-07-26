export default function Home() {
  return (
    <main className="flex flex-col items-center mt-8">
      <h1 className="text-3xl uppercase font-semibold mb-14">Home Page</h1>
      <ul className="list-none">
        <li className="text-lg">
          Use username: <span className="font-semibold">admin</span> and
          password: <span className="font-semibold">admin</span> to log in to
          the app and view history.
        </li>
      </ul>
    </main>
  );
}
