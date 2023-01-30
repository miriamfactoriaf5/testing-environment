import sumArray from "../src/sumArray";

test ("should return 6 if array is [1, 2, 3]",

() => {
    let result = sumArray([1,2,3]);
    expect(result).toBe(6); // .toBeGreaterThan(4)
}

)