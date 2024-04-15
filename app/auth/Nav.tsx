import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/[...nextauth]";
import { signIn } from "next-auth/react";
import Login from "@/app/auth/Login";
import Logged from "@/app/auth/Logged";
import Link from "next/link";

export default async function Nav() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center py-8 ">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">Send It.</h1>
      </Link>
      <ul className="flex items-center gap-6"></ul>
      {!session?.user && <Login />}
      {session?.user && <Logged image={session.user?.image?} />}
    </nav>
  );
}
