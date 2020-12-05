import React from 'react';
import TaskListContextProvider from '../context/TaskListContext';
import styles from '../styles/Home.module.css'

import InputTask from '../components/InputTask';
import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <TaskListContextProvider>
      <div className={styles.container}>
        <InputTask />
        <TaskList />
      </div>
    </TaskListContextProvider>
  )
}
