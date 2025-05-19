##### 1. Create a simple functional component that displays a greeting.

##### 2. Pass props to a component and render dynamic data.

##### 3. Explain the difference between a function and a functional component.

**React Functional Components:**

## 1. Simple Functional Component with Greeting

```jsx
function Greeting() {
  return <h1>Hello, welcome to React!</h1>;
}

// Usage:
// <Greeting />
```

## 2. Component with Props for Dynamic Data

```jsx
function PersonalizedGreeting(props) {
  return <h1>Hello, {props.name}! Welcome to React.</h1>;
}

// Usage:
// <PersonalizedGreeting name="Sarah" />

// Alternatively with destructuring:
function PersonalizedGreeting({ name }) {
  return <h1>Hello, {name}! Welcome to React.</h1>;
}
```

## 3. Difference Between Function and Functional Component

**Regular Function:**

- A standard JavaScript function that performs some logic and optionally returns a value
- Not specific to React
- Typically used for general-purpose computations or data transformations
- Example:

```jsx
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
```

**Key Differences:**

1. **Return Value:** Functional components return JSX, regular functions return any value

2. **Purpose:** Functional components are for UI, regular functions for general logic

3. **Hooks:** Only functional components can use React hooks

4. **Naming Convention:** Functional components are typically PascalCased

5. **React Integration:** Functional components are recognized by React as components that can be rendered

Functional components are essentially specialized functions that follow React's rules for creating components.
