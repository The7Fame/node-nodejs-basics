const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = [];
  while (args.length > 0) {
    const name = args.shift().slice(2);
    const val = args.shift();
    res.push(`${name} is ${val}`);
  }
  console.log(res.join(", "));
};

parseArgs();
