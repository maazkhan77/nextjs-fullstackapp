import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/nextjslogo.png" alt="" width={250} height={120} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
