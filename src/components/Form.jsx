import { NameContext } from "../context/NameContext";

const Form = () => {

  return (
    <NameContext.Consumer >
      { value => {
        return (
          <div className="form-wrapper">
            <form>
              <label>Your Name:</label>
              <input type="text" placeholder={value.name} onChange={e => value.setName(e.target.value)}/>
            </form>
          </div>
          )
        }
      }
    </NameContext.Consumer>
  )
}

export default Form;