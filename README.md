# Task Master

Task Master is a sleek and efficient React application designed to help you manage your tasks effortlessly. Keep track of your to-dos, mark them as completed, and add new tasks seamlessly.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Demo](#demo)
- [Components](#components)
  - [TodoItem](#todoitem)
  - [TodoList](#todolist)
  - [TodoSearch](#todosearch)
  - [TodosEmpty](#todosempty)
  - [TodosError](#todoserror)
  - [TodosLoading](#todosloading)
- [Context](#context)
  - [TodoContext](#todocontext)
  - [TodoProvider](#todoprovider)
- [Custom Hook](#custom-hook)
  - [useLocalStorage](#uselocalstorage)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is organized into various components and files to ensure a clear and modular structure. Here's a brief overview:

- Components: A set of React components responsible for different aspects of the application.
- Context: Manages the state and logic related to To-Dos, providing a context for components.
- Custom Hook: Handles local storage operations for easy data retrieval and storage.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Features

- Add new To-Dos.
- Mark To-Dos as completed.
- Delete To-Dos.
- Search and filter To-Dos.
- Persistent data using local storage.

## Demo

Take a look at the application deployed in [GitHub-Pages!](https://jsurrea.github.io/task-master)

## Components

### TodoItem

The TodoItem component represents an individual To-Do item within the application. It features a clean design with the ability to mark tasks as completed or delete them.

### TodoList

The TodoList component displays a scrollable list of To-Dos, providing an organized view for efficient task management.

### TodoSearch

The TodoSearch component includes a user-friendly search bar, allowing users to filter tasks based on their input.

### TodosEmpty

The TodosEmpty component welcomes users with an inviting message when there are no tasks, encouraging them to start their journey with Task Master.

### TodosError

The TodosError component gracefully handles errors, displaying a message to inform users that something unexpected occurred.

### TodosLoading

The TodosLoading component presents a friendly loading message, keeping users informed while their data is being fetched.

## Context

### TodoContext

The TodoContext manages the state and logic related to To-Dos. It provides a context for components to access and modify To-Do data.

### TodoProvider

The TodoProvider wraps the application with the TodoContext.Provider to supply To-Do-related data and functions to its children.

## Custom Hook

### useLocalStorage

The useLocalStorage hook simplifies local storage operations, allowing easy retrieval and storage of data.

## Usage

Feel free to explore, customize, and enhance the application based on your requirements! If you have any questions or suggestions, don't hesitate to reach out.

## Contributing

Contributions are welcome! If you have ideas for improvements, bug fixes, or new features, please submit a pull request.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.
