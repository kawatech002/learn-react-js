import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Task from "./Task";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <main>
      <section>
        <h2>Task List</h2>
        <Task/>
      </section>

      <div>
        <h2>Task Details</h2>
      </div>

      </main>
    </div>

  );
}

export default App;