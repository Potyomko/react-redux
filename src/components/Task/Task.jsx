import { MdClose } from "react-icons/md";
 import css from "./Task.module.css";
 import { useDispatch } from "react-redux";
 import { toggleCompleted} from "../../redux/tasks/operations";
import { useDeleteTaskMutation } from "../../redux/tasks/tasksApi";

 export const Task = ({ task }) => {
   const dispatch = useDispatch()
   const [deleteTask] = useDeleteTaskMutation();
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
         onClick={()=>deleteTask(task.id)}>
         <MdClose size={24} />
       </button>
     </div>
   );
 };