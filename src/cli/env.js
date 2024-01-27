const parseEnv = () => {
  const vars = Object.keys(process.env).filter((e) => e.startsWith("RSS_"));
  const res = vars.map((e) => `${e}=${process.env[e]}`).join(";");
  console.log(res);
};

parseEnv();
