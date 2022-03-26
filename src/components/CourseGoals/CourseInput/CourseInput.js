import React, {useState} from "react";

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='goal' className='form-label'>Course Goal</label>
            <input id='goal' className='form-control' type="text" onChange={goalInputChangeHandler}/>
            <br/>
            <button className='btn btn-secondary' type="submit">Add Goal</button>
        </form>
    );
};

export default CourseInput;
