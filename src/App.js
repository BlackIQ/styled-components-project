import React, {useState} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        {text: 'Do all exercises!', id: 'g1'},
        {text: 'Finish the course!', id: 'g2'}
    ]);

    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
            return updatedGoals;
        });
    };

    const deleteItemHandler = goalId => {
        setCourseGoals(prevGoals => {
            return prevGoals.filter(goal => goal.id !== goalId);
        });
    };

    let content = (
        <p>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
        );
    }

    return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card border' id="goal-form">
                        <div className='card-body'>
                            <CourseInput onAddGoal={addGoalHandler}/>
                        </div>
                    </div>
                    <br />
                    {content}
                </div>
            </div>
        </div>
    );
};

export default App;
