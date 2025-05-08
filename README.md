# TypeScript Cheatsheet

## 1. **Differences Between `interface` and `type` in TypeScript**

| Feature                 | `interface`                                            | `type`                                                                         |
| ----------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| **Keyword**             | `interface`                                            | `type`                                                                         |
| **Primary Use**         | Defining the structure of objects                      | Defining various constructs including primitives, unions, tuples, etc.         |
| **Extensibility**       | Can be extended using `extends` or declaration merging | Can be extended using intersections (`&`), but does **not** merge declarations |
| **Declaration Merging** | ✅ Supported                                            | ❌ Not supported                                                                |
| **Best Use Case**       | Object shapes and class contracts                      | Complex types, unions, primitives, and aliases                                 |

### ✨ Example: Interface vs Type

```ts
// Using interface
interface User {
  name: string;
  age: number;
}

// Using type
type Product = {
  id: number;
  name: string;
};
```

---

## 2. **The `keyof` Keyword in TypeScript**

The `keyof` keyword extracts all keys from a given object type and returns them as a union of string literal types. This is especially useful for creating type-safe utilities and generic constraints.

### 🔍 Use Case

```ts
interface Person {
  name: string;
  age: number;
  city: string;
}

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "city"
```

### ✅ Benefits

* Ensures type-safe property access
* Enhances generic programming
* Useful for building utility types
