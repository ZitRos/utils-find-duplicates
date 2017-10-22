const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

/**
 * @param {string} rootDir - Where to search for duplicates. Recursive search is performed.
 * @param {boolean} [log] - Whether to output the log information.
 */
function findDuplicates (rootDir = __dirname, log = false) {
	
	if (!fs.statSync(rootDir).isDirectory())
		return [];
	
	const map = new Map();
	const hash = (x) => crypto.createHash("md5").update(x).digest("hex");
	const duplicates = [];
	
	let bytes = 0,
		files = 0;

	function walkSync (dir, filelist = []) {
		let files = fs.readdirSync(dir);
		files.forEach((file) => {
			const next = path.join(dir, file);
			if (fs.statSync(next).isDirectory()) {
				walkSync(next, filelist);
			} else {
				filelist.push(next);
			}
		});
		return filelist;
	};

	function areIdentical (buffer, f2) {
		return Buffer.compare(buffer, fs.readFileSync(f2)) === 0;
	}

	for (let file of walkSync(rootDir)) {
		
		const contents = fs.readFileSync(file);
		const key = hash(contents);
		
		if (log) {
			bytes += Buffer.byteLength(contents);
			files++;
			process.stdout.write(`\x1b[2K\rChecked ${ files } files of ${ Math.floor(bytes / 1024 / 1024 * 100) / 100 } Mb`);
		}
		
		if (!map.has(key)) {
			map.set(key, [file]);
			continue;
		}
		
		const arr = map.get(key);
		
		if (areIdentical(contents, arr[0])) {
			arr.push(file);
		}
		
	}
	
	map.forEach((arr, key) => {
		if (arr.length < 2)
			return;
		duplicates.push(arr);
	});
	
	if (log)
		process.stdout.write(`\r\n`);
	
	return duplicates;
	
}

module.exports = findDuplicates;

// Whether the module called directly from console/terminal
if (require.main === module) {
	
	let dir = __dirname;
	
	if (process.argv[2]) {
		dir = path.resolve(process.cwd(), process.argv[2]);
	}
	
	const dups = findDuplicates(dir, true);
	
	if (dups.length === 0) {
		console.log(`No duplicates found in ${ dir }`);
	} else {
		console.log(`Found ${ dups.length } duplicated file${ dups.length > 1 ? "s" : "" }:`);
	}
	
	for (let dup of dups) {
		console.log(`╔ ${ dup.length - 1 } duplicate${ dup.length - 1 > 1 ? "s" : "" } of ${ dup[0] }:`);
		for (let i = 1; i < dup.length; ++i) {
			console.log(`${ i === dup.length - 1 ? "╚" : "╠" }══ ${ dup[i] }`);
		}
	}
	
}