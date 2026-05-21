```markdown
# one-planet-partners Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `one-planet-partners` TypeScript codebase. It covers file organization, code style, commit practices, and testing patterns to ensure consistency and maintainability across the project.

## Coding Conventions

### File Naming
- Use **kebab-case** for all file names.
  - Example:  
    ```
    user-profile.ts
    order-service.test.ts
    ```

### Import Style
- Use **alias imports** to reference modules.
  - Example:
    ```typescript
    import { UserService } from '@services/user-service';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // user-profile.ts
    export function getUserProfile(id: string) { ... }
    ```

### Commit Messages
- Follow **Conventional Commits**.
- Use prefixes such as `refactor`.
- Keep commit messages concise (average: ~65 characters).
  - Example:
    ```
    refactor: update user service to use new API endpoint
    ```

## Workflows

### Refactoring Code
**Trigger:** When you need to improve code structure without changing its behavior  
**Command:** `/refactor`

1. Identify code that can be improved (e.g., readability, maintainability).
2. Make changes ensuring no functionality is altered.
3. Use named exports and alias imports as per conventions.
4. Name new/updated files using kebab-case.
5. Write or update tests as needed.
6. Commit your changes using a conventional commit message with the `refactor` prefix.
   - Example:  
     ```
     refactor: simplify order processing logic
     ```
7. Push your changes and open a pull request if required.

## Testing Patterns

- Test files follow the pattern: `*.test.*`
  - Example:  
    ```
    order-service.test.ts
    ```
- The specific testing framework is not detected; follow the existing test file structure.
- Place tests alongside or near the modules they cover.

## Commands
| Command    | Purpose                                      |
|------------|----------------------------------------------|
| /refactor  | Start a code refactor workflow               |
```