## Solution for test task

### Answer for task on refactoring
You can find it in `src/scripts/answer.ts`.

Solution:
```typescript
export function answerFunc(s: string, a: string, b: string): number {
  if (s.length === 0) {
    return -1;
  }

  let res: number = -1;

  for(let i: number = s.length - 1; i > 0; i--) {
    const el: string = s[i];
    if (el === a || el === b) {
      res = i;
      break;
    }
  }

  return res;
}
```

This solution improved next moments.

At first, i change check on empty string from regexp match into length checking.
Because `match` method with regexp more time consuming than check string length.
```typescript
if (s.match(/^$/)) {
  return -1;
}

// changed on
if (s.length === 0) {
  return -1;
}
```

At second, i have updated loop script and final check. 
Because at first version of method we checks all elements of string from last element to first. Then after this search we take position index of A and B elements, and do unfficient checking for result position. I think we can improve this and return only position of first finded element A or B at string from string end.

### Test
You can find test cases at file `src/scripts/tests.ts`.

### Development
For starting development server, you can run `npm run dev`.
