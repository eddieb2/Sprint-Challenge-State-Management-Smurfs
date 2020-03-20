1. What problem does the context API help solve?

- It solves the problem of not being able to share data across all levels of the app.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- The reducer copies and updates new state.
- The actions are the message and the action creators are the message senders.
- The store holds on to the entire state tree and then figures out what state changes need to happen.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is the global state that all components can access, and component state is the state that is localized.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-thunk is middleware that returns a function instead of an object. That function in turn recieves the store's dispatch method allowing for the dispatch to perform synchronous actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite state managemnt system is Redux. I mainly like how state is store in only one place.
