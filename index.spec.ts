import test from 'tape';
import { Navigable } from '.';

test('should generate object patch array', (t) => {
    interface Test {
        a: string,
        b: Test[],
    }
    const path = new Navigable<Test>().to('b').to(0).to('a').getPath();
    t.equal(path.length, 3, 'path length is correct');
    t.equal(path.join('.'), 'b.0.a');
    t.end();
});