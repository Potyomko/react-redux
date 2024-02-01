import { MdClose } from "react-icons/md";
 import css from "./Task.module.css";
 import { useDispatch } from "react-redux";
 import { deleteTasks, toggleCompleted} from "../../redux/operetions";

 export const Task = ({ task }) => {
   const dispatch = useDispatch()
   const handleDelete = ()=>dispatch(deleteTasks(task));
   const handleToggle =()=>dispatch(toggleCompleted(task));
   return (
     <div className={css.wrapper}>
       <input
         type="checkbox"
         className={css.checkbox}
         checked={task.completed}
         onChange={handleToggle}
       />
       <p className={css.text}>{task.text}</p>
       <button className={css.btn}
         onClick={handleDelete}>
         <MdClose size={24} />
       </button>
     </div>
   );
 };