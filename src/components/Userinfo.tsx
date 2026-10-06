"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Userinfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const handlesignout = async () => {
        await authClient.signOut();
    }

    return (
        <div className='flex items-center justify-end gap-4'>
            {
                user ? (
                <div className="flex flex-col items-center gap-2">
                    <Link href={'/profile'}>
                        <div className="avatar ">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img alt="Tailwind-CSS-Avatar-component"
                                    src={user?.image as string} />
                            </div>
                        </div>
                    </Link>
                    <h2>{user.name}</h2>
                    <button onClick={handlesignout} className="btn btn-error btn-xs">SigOut</button>

                </div>) : (

                    <div className="flex items-center justify-end gap-4">
                        <Link href={'/signin'}>
                            <button className='text-sm text-gray-800 hover:underline'>
                                সাইন ইন
                            </button>
                        </Link>
                        <Link href={'/singup'}>
                            <button className='text-sm font-semibold bg-red-700 text-white px-3 py-1.5 rounded-md hover:bg-red-800'>
                                সাইন আপ
                            </button>
                        </Link>
                    </div>


                )}
        </div>
    );
};

export default Userinfo;