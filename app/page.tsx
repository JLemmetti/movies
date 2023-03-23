import LoginBtn from './login-btn';

export default async function Page() {
  return (
    <div className="h-[60vh]">
      <p className="pt-20 mx-auto text-3xl text-center">
        Welcome to my movie list!
      </p>
      <div className="flex flex-col items-center my-5">
        <LoginBtn />
      </div>
    </div>
  );
}
