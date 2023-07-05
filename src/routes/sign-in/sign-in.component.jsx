import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFroAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); //use info pulled from
    const userDocRef = await createUserDocumentFroAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
