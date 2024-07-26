import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <main className='w-screen h-[300px] flex flex-col justify-center gap-5 items-center'>
      <section className='flex flex-col gap-2'>
        <button
          className="flex border-2 min-w-40 border-black items-center justify-center pl-2 pr-2 rounded"
          onClick={() => navigate("/Map")}>
          Play
        </button>
        <button
          className="flex border-2 min-w-40 border-black items-center justify-center pl-2 pr-2 rounded"
          onClick={() => navigate("/Profile")}>
          Profile
        </button>
      </section>
    </main>
  );
}

export default Main;
