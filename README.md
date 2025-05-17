# abipulli-types

A TypeScript types package for sharing common types between frontend and backend applications.

## Installation

```bash
# Install as a dev dependency
npm install -D abipulli-types
# or
yarn add -D abipulli-types
```

## Usage

Import the types you need in your TypeScript files:

```typescript
import { User, UserRole, Order, OrderStatus, OrderItem } from "abipulli-types";

// Example User
const user: User = {
  id: "123",
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: true,
  role: UserRole.USER,
};

// Example Order
const order: Order = {
  id: "456",
  userId: user.id,
  total: 99.99,
  status: OrderStatus.PENDING,
  items: [
    {
      id: "789",
      productId: "prod_123",
      quantity: 2,
      price: 49.99,
      subtotal: 99.98,
    },
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
};
```

## Available Types

### User Types (`types/user.ts`)

- `User`: Main user interface
- `UserRole`: Enum for user roles (ADMIN, USER, GUEST)
- `UserCreateInput`: Type for creating new users
- `UserUpdateInput`: Type for updating existing users

### Order Types (`types/order.ts`)

- `Order`: Main order interface
- `OrderItem`: Interface for items within an order
- `OrderStatus`: Enum for order statuses
- `OrderCreateInput`: Type for creating new orders
- `OrderUpdateInput`: Type for updating existing orders

### API Types (`types/api.ts`)

- `ApiResponse<T>`: Generic type for API responses
- `PaginatedResponse<T>`: Generic type for paginated responses
- `ApiError`: Type for API error responses

## Development

1. Make changes to the types in the `src/types` directory
2. Build the package: `npm run build`
3. Commit and push your changes
4. Publish to npm: `npm publish`

## Project Structure

```
src/
  ├── types/
  │   ├── user.ts      # User-related types
  │   ├── order.ts     # Order-related types
  │   └── api.ts       # API-related types
  └── index.ts         # Main exports
```
