import "./FormN.css";

export default function FormN(props) {
  function handleSubmit(event) {
    props.setN(parseInt(event.target.nval.value));
    event.preventDefault();
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <select id="nval" name="nval" defaultValue="8">
          <option value="10">N = 10</option>
          <option value="9">N = 9</option>
          <option value="8">N = 8</option>
          <option value="7">N = 7</option>
          <option value="6">N = 6</option>
          <option value="5">N = 5</option>
          <option value="4">N = 4</option>
          <option value="3">N = 3</option>
          <option value="2">N = 2</option>
          <option value="1">N = 1</option>
        </select>
        <br />
        <input className="submitbtn" type="submit" value="Place Queens" />
      </form>
    </div>
  );
}
