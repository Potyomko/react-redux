import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";
import { useSelector } from "react-redux";

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const filterStatus = useSelector(state=>state.filters.status)
  const visibleTask = tasks.filter((task) => {
    switch (filterStatus) {
      case statusFilters.active:
        return !task.completed;
      case statusFilters.completed:
        return task.completed;
      default:
        return task;
    }
  })

  return (
    <ul className={css.list}>
      {visibleTask.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
