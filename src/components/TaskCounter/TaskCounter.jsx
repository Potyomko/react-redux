import { getTasks } from "../../redux/tasks/selectors";
import { count } from "../../redux/selectors";
 import css from "./TaskCounter.module.css";
 import { useSelector } from "react-redux";

 export const TaskCounter = () => {
   const counts = useSelector(count);
   return (
     <div>
       <p className={css.text}>Active:{counts.active}</p>
       <p className={css.text}>Completed:{counts.completed}</p>
     </div>
   );
 };