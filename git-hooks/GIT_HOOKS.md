# Git Hooks

## Run Prettier and ESLint checks on every commit

To run Prettier and ESLint on every commit, run `cp git-hooks/pre-commit .git/hooks`.

Note that the checks do not abort the commit, they only inform you of any issues found.
