"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SingupPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      router.push("/");
    }
  };
  const handlegoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  }
  const handlegithubSignin = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  }

  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl text-red-700">সাইন আপ</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" required />

          <label className="label">Image</label>
          <input name="image" type="text" className="input" placeholder="Image URL" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required />

          <button type="submit" className="btn btn-neutral bg-red-700 text-white mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <button onClick={handlegoogleSignin} className='btn'>SignIn With Google</button>
      <button onClick={handlegithubSignin} className='btn'>SignIn With Github</button>
    </div>
  );
};

export default SingupPage;