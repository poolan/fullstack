
import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.courseinfo.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content.name} {props.content.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.content[0]} />
      <Part content={props.content[1]} />
      <Part content={props.content[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.courseinfo.parts[0].exercises + props.courseinfo.parts[1].exercises + props.courseinfo.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseinfo={course} />
      <Content content={course.parts}/>
      <Total courseinfo={course}/>
    </div> 
  )
}

export default App