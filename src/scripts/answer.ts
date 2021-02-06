export function answerFunc(s: string, a: string, b: string): number {
  if (s.match(/^$/)) {
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


