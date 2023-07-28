import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavMenu from "./NavMenu";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  } else {
  }

  return <main></main>;
}
