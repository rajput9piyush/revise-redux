import "./redux";
import createStore from "./redux";

// Action Name
const AddTodo = "AddTodo";
const RemoveTodo = "RemoveTodo";
const ToggleTodo = "ToggleTodo";
const AddGoal = "AddGoal";
const RemoveGoal = "RemoveGoal";

// Reducer function (it should always be a pure function)

// 1. todo Reducer
const todos = (state = [], action) => {
    switch (action.type) {
        case AddTodo:
            return state.concat([action.todo]);
        case RemoveTodo:
            return state.filter((todo) => todo.id !== action.id);
        case ToggleTodo:
            return state.map((todo) => {
                if (todo.id === action.id)
                    return Object.assign({}, todo, {
                        complete: !todo.complete,
                    });
                else return todo;
            });
        default:
            return state;
    }
};

// 2. goal Reducer
const goals = (state = [], action) => {
    switch (action.type) {
        case AddGoal:
            return state.concat([action.goal]);
        case RemoveGoal:
            return state.filter((goal) => goal.id !== action.id);
        default:
            return state;
    }
};

// 3. app Reducer (combining todo and goal reducer)
const app = (state = [], action) => {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action),
    };
};

// Creating a Store
const store = createStore(app);

/* Action Method */

// 1. Add Todo
const addTodoAction = (todo) => {
    return {
        type: AddTodo,
        todo,
    };
};

// 2. Remove Todo using id
const removeTodoAction = (id) => {
    return {
        type: RemoveTodo,
        id,
    };
};

// 3. Toggle Todo using id
const toggleTodoAction = (id) => {
    return {
        type: ToggleTodo,
        id,
    };
};

// 4. Add a Goal
const addGoalAction = (goal) => {
    return {
        type: AddGoal,
        goal,
    };
};

// 5. Remove a Goal using id
const removeGoalAction = (id) => {
    return {
        type: RemoveGoal,
        id,
    };
};
