function get(obj, path, defaultValue) {
	if (typeof path !== "string" && typeof path !== "number") return defaultValue;

	let keysArr = [];

	path
		.toString()
		.split(".")
		.forEach((item) => {
			item.split(/\[([^}]+)\]/g).forEach(function (key) {
				if (key.length > 0) {
					keysArr.push(key);
				}
			});
		});

	let current = obj;

	for (let i = 0; i < keysArr.length; i++) {
		if (current[keysArr[i]] === undefined) return defaultValue;

		current = current[keysArr[i]];
	}

	return current;
}

const obj = {
	a: {
		b: {
			c: "d",
		},
		e: "f",
	},
};

console.log(get(obj, "a.b")); // { c : 'd' }
console.log(get(obj, "a.b.c")); // 'd'
console.log(get(obj, "a.e")); // 'f'
console.log(get(obj, "x.x.e")); // undefined
console.log(get(obj, "a.x.e", true)); // true
console.log(get(obj, "a.x.e", "My default value")); // My default value
