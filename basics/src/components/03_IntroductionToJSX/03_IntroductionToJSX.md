## 1. Convert an HTML snippet into JSX

**HTML Snippet:**

```html
<div class="container">
  <input type="text" placeholder="Enter name" />
  <button onclick="submit()" style="color: red">Submit</button>
</div>
```

**Converted JSX:**

```JavaScript
<div className="container">
  <input type="text" placeholder="Enter name" />
  <button onClick={submit} style={{ color: "red" }}>Submit</button>
</div>
```

**Key Changes:**

- `class` has been updated to `className`.
- The `<input>` tag is now self-closing (`<input />`).
- `onclick` has been changed to `onClick` (camelCase).
- Inline styles are now represented using a JavaScript object, for example: `{{ color: "red" }}`.

## 2. Why JSX is not plain HTML

**1. JSX is JavaScript Syntax Sugar:**

- JSX compiles to `React.createElement()` calls, not plain HTML.
- **Example:** `<div />` becomes `React.createElement('div', null)`.

**2. CamelCase Attributes:**

- **HTML:** `onclick`, `tabindex`, `maxlength`.
- **JSX:** `onClick`, `tabIndex`, `maxLength`.

**3. JavaScript Expressions:**

- Embed dynamic values with `{ }` (e.g., `{variable}` or `{function()}`).

**4. Self-Closing Tags:**

- All tags must be explicitly closed (e.g., `<img />` instead of `<img>`).

**5. Reserved Keywords:**

- Attributes like `class` and `for` become `className` and `htmlFor`.

## 3. What happens behind the scenes when JSX is compiled?

**1. Transpilation (via Babel):**
JSX is converted into `React.createElement(type, props, children)` calls.

```JavaScript
JSX
<div className="header">Hello {name}</div>
```

Compiles to:

```JavaScript
javascript
React.createElement(
  "div",
  { className: "header" },
  "Hello ",
  name
);
```

**3. Modern JSX Transforms (React 17+):**

- New JSX transforms remove the need to explicitly import React.
- Example: JSX compiles to `_jsx()` calls from the React JSX runtime:

```JavaScript
javascript
{
import { jsx as _jsx } from "react/jsx-runtime";
_jsx("div", { className: "header", children: "Hello" });
}
```

**Summary:** JSX is a developer-friendly abstraction that compiles to JavaScript function calls, enabling declarative UI construction for React.
