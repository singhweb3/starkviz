import SignIn from "../../components/Signin"

import { Metadata } from "next";
import {createDefaultAdmin} from "../lib/initAdmin"

export const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Nextjs Template",
  // other metadata
};

const SigninPage = () => {
  createDefaultAdmin()
  return (
    <SignIn/>
  );
};

export default SigninPage;
