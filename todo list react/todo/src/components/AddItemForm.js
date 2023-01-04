import "./AddItemForm.css";

const AddItemForm = () => {
  return (
    <form className="todoitemform">
      <div className="inputs_div">
        <input type="text" className="subject_input" value="Subject"></input>
        <input type="text" className="task_input" value="Task"></input>
      </div>
      <div className="buttons_div">
        <button type="submit" className="button">
          add
        </button>
      </div>
    </form>
  );
};
export default AddItemForm;
