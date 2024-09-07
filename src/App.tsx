import { usePostApiV1AccountSignup, QUERY_DTO } from "./query/src";

const App = () => {
  const { mutateAsync: signUp, isPending } = usePostApiV1AccountSignup();
  const handleSignIn = () => {
    signUp({
      data: {} as QUERY_DTO.UserModel,
    });
  };
  return (
    <button onClick={handleSignIn} disabled={isPending}>
      SignIn
    </button>
  );
};

export default App;
