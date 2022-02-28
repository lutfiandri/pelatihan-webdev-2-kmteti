import people3, { people1, people2 } from './people.js';
import sayHi from './greeting.js';
import { MultiplyBy2, LuasLingkaran } from './helpers/mathHelper.js';
import isOdd from 'is-odd';

console.log(people1, people2, people3);

sayHi(people2);

console.log(MultiplyBy2(10));
console.log(LuasLingkaran(14));

console.log(isOdd(2));
