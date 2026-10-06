'use client'

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newUserData = Object.fromEntries(formData.entries()) as {
            name: string;
            image: string;
        };

        const { error } = await authClient.updateUser({
            ...newUserData,
        });

        if (error) {
            console.log(error);
            return;
        }

        setIsEditing(false); // আপডেট হলে ফর্ম বন্ধ হয়ে যাবে
    };

    return (
        <div className="mt-5">
            <div className="flex flex-col items-center gap-2">
                <Link href={"/profile"}>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img alt="Avatar" src={user?.image as string} />
                        </div>
                    </div>
                </Link>

                <h2 className="font-semibold text-lg">{user?.name}</h2>
                <h2 className="text-gray-500">{user?.email}</h2>

                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`btn btn-sm mt-2 px-6 text-white border-none ${isEditing ? "bg-gray-600 hover:bg-gray-700" : "bg-red-700 hover:bg-red-800"
                        }`}
                >
                    {isEditing ? "Close" : "Edit Profile"}
                </button>
            </div>

            {isEditing && (
                <form onSubmit={handleUpdateProfile} className="flex justify-center mt-4">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Name"
                            defaultValue={user?.name}
                            required
                        />

                        <label className="label">Image</label>
                        <input
                            name="image"
                            type="text"
                            className="input"
                            placeholder="Image URL"
                            defaultValue={user?.image ?? ""}
                        />

                        <button type="submit" className="btn btn-neutral bg-red-700 text-white mt-4">
                            Update Profile
                        </button>
                    </fieldset>
                </form>
            )}
        </div>
    );
};

export default ProfilePage;