"use client"

import { login } from "@/lib/action";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import styles from "./loginForm.module.css"

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

//   useEffect(() => {
//     state?.success && router.push("/login");
//   }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password " placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
