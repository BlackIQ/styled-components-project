import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

const CourseGoalList = props => {
    return (
        <div>
            {props.items.map(goal => (
                <div>
                    <CourseGoalItem
                        key={goal.id}
                        id={goal.id}
                        onDelete={props.onDeleteItem}
                    >
                        {goal.text}
                    </CourseGoalItem>
                    <br/>
                </div>
            ))}
        </div>
    );
};

export default CourseGoalList;
