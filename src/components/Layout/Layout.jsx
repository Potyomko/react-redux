import { useDispatch } from "react-redux";
import css from "./Layout.module.css";
import { useEffect } from "react";
import { refresh } from "../../redux/auth/operations";

export const Layout = ({ children }) => {
    const dispath = useDispatch();
  useEffect(() => {
    dispath(refresh())
  },[dispath])
  return <main className={css.container}>{children}</main>;
};
