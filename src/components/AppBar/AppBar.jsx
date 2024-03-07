import { Navigation } from "components/Navigation/Navigation";
import css from "./AppBar.module.css";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthMenu } from "components/AuthMenu/AuthMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
   return (
     <header className={css.wrapper}>
       <Navigation />
       {isLoggedIn ? <UserMenu/> : <AuthMenu/>}
     </header>
   );
}; 
 
/* <section className={css.section}>
         <h2 className={css.title}>Tasks</h2>
         <TaskCounter />
       </section>
       <section className={css.section}>
         <h2 className={css.title}>Filter by status</h2>
         <StatusFilter />
       </section> */