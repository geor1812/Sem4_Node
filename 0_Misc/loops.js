const failures = ["misclick", "tiktok", "donald", "new star wars"];
failures.map((fail, index) => console.log(index + ": " +fail));
const newFailure = failures.map((fail) => {return fail;});
console.log(newFailure);