## Harkirat Cohort Repository

This repository contains weekly assignments, practice projects, and small apps built while following the cohort. I will be updating the code week wise here only.

---

## Prerequisites

- Node.js (LTS recommended). Verify with: `node -v` and `npm -v`.
- Jest is invoked via `npx`, so no global install required.

If you haven’t yet installed dependencies for a given assignment folder and it has a `package.json`, run `npm install` inside that folder first.

---

## Running JavaScript Assignment Tests (01-js)

1. Open a terminal at the repo root.
2. Change into the assignment directory:

   PowerShell / bash:

   ```
   cd assignments-cohort/01-js
   ```

3. (First time only) install dependencies (if a `package.json` gains Jest config later):

   ```
   npm install
   ```

   Currently the folder relies on `npx jest` without local dev dependencies; this still works because `npx` will fetch Jest if needed.

4. Run all tests for the week:

   ```
   npx jest ./tests/
   ```

5. Run a single test file (example – largest element problem):

   ```
   npx jest ./tests/findLargestElement.test.js
   ```

   Pattern: `npx jest ./tests/<filename>.test.js`

   Note: Files here are named with `.test.js` (singular), not `.tests.js`. If you see instructions elsewhere using `filename.tests.js`, adjust to the actual file name.

6. Run tests with watch mode (reruns on save):

   ```
   npx jest ./tests/findLargestElement.test.js --watch
   ```

7. Run a test by matching its name (useful when many tests are in one file):
   ```
   npx jest -t "anagram" ./tests/anagram.test.js
   ```

---

## Adding New Problems & Tests

1. Create your implementation file (e.g., `reverseString.js`).
2. Write a corresponding test in `tests/reverseString.test.js`.
3. Export your function (e.g., `module.exports = reverseString;`).
4. In the test file, `const reverseString = require('../reverseString');` and add `describe` / `it` blocks.
5. Run: `npx jest ./tests/reverseString.test.js`.

---

## Common Troubleshooting

| Issue                                 | Cause                            | Fix                                                      |
| ------------------------------------- | -------------------------------- | -------------------------------------------------------- |
| `Cannot find module`                  | Wrong relative path in `require` | Adjust `../` segments relative to test file location     |
| No tests found                        | Wrong filename pattern           | Ensure file ends with `.test.js` and resides in `tests/` |
| Slow first run                        | npx downloading Jest             | Subsequent runs will be faster                           |
| Permission / script errors on Windows | Execution policy restrictions    | Run PowerShell as admin or use Git Bash                  |

---

## Suggested (Optional) Improvement

You can add a script inside `assignments-cohort/01-js/package.json` for convenience:

```json
"scripts": {
  "test": "jest ./tests"
}
```

Then run all tests via:

```
npm test
```
---

## Quick Commands Cheat Sheet

| Task                        | Command                               |
| --------------------------- | ------------------------------------- |
| Enter JS assignments folder | `cd assignments-cohort/01-js`         |
| Run all tests               | `npx jest ./tests/`                   |
| Run one test file           | `npx jest ./tests/palindrome.test.js` |
| Watch mode                  | `npx jest --watch`                    |
| Filter by test name         | `npx jest -t "substring"`             |

---

Happy coding! Tackle problems incrementally—make one test pass at a time, then refactor.
