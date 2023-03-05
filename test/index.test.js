const api = "http://localhost:6000/"

import add from "./index.js"
test('toEqual', () => {
    expect(add(1, 2)).to.equal(3)
})