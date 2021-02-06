import { answerFunc } from './answer';
import { func } from './task';

export function runTests(): void {
  console.log(
    'String is empty. Expects -1: ', 
    func('', 'a', 'b') === answerFunc('', 'a', 'b')
  );
  console.log(
    'First element index is unavailable. Expects -1: ', 
    func('ab', 'a', 'c') === answerFunc('ab', 'a', 'c')
  );
  console.log(
    'Should return index of element at second argument. Expects 1: ', 
    func('ab', 'a', 'b') === answerFunc('ab', 'a', 'b')
  );
  console.log(
    'Should return index of element at first argument. Expects 1: ',
    func('ab', 'b', 'c') === answerFunc('ab', 'b', 'c')
  );
  console.log(
    'Should return index of element at second argument. Expects 2: ',
    func('abc', 'b', 'c') === answerFunc('abc', 'b', 'c')
  );
  console.log(
    'Should return index of last occurrence of elment at second argument. Expects 3: ',
    func('abcc', 'b', 'c') === answerFunc('abcc', 'b', 'c')
  );
  console.log(
    'Should return index of last occurrence of elment at first argument. Expects 4: ',
    func('abcca', 'a', 'c') === answerFunc('abcca', 'a', 'c')
  );
}
