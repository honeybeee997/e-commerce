import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHttp } from "../../hooks/use-http";
import { backend } from "../../.config.js";
import LoginForm from "../../components/admin/LoginForm";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store/admin";
import { useRouter } from "next/router";

const Index = () => {
  const [error, setError] = useState("");
  const { sendRequest, isLoading } = useHttp();

  const disptach = useDispatch();
  const router = useRouter();

  const loginSubmitHandler = async (values) => {
    setError("");
    const url = `${backend}/api/admin/login`;
    const body = JSON.stringify(values);
    const res = await sendRequest(url, "POST", body);
    if (res.status === "success") {
      disptach(
        adminActions.login({ token: res.data.token, user: res.data.user })
      );
      router.replace("/admin/dashboard");
    } else {
      return setError(res.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Entered email is not Valid")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: loginSubmitHandler,
  });

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <LoginForm formik={formik} isLoading={isLoading} alert={error} />
    </>
  );
};

export default Index;
