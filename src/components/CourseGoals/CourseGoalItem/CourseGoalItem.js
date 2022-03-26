import React from 'react';

const CourseGoalItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='bg-secondary rounded-3 p-3 text-white pointer' onClick={deleteHandler}>
      {props.children}
    </div>
  );
};

export default CourseGoalItem;
