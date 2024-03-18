import { Button } from "../Button/Button";
 import css from "./StatusFilter.module.css";
 import { statusFilters } from "../../redux/tasks/constants";
 import { useDispatch, useSelector } from "react-redux";
 import { setStatusFilter } from "../../redux/tasks/slices";
 import { selectFiltersStatus } from "../../redux/tasks/selectors";

 export const StatusFilter = () => {
   const dispatch = useDispatch()
   const filter = useSelector(selectFiltersStatus)
   const handelChange=(filter)=>dispatch(setStatusFilter(filter))
   return (
     <div className={css.wrapper}>
       <Button onClick = {()=>handelChange(statusFilters.all)} selected={filter===statusFilters.all}>All</Button>
       <Button onClick = {()=>handelChange(statusFilters.active)} selected={filter===statusFilters.active}>Active</Button>
       <Button onClick = {()=>handelChange(statusFilters.completed)} selected={filter===statusFilters.completed}>Completed</Button>
     </div>
   );
 }