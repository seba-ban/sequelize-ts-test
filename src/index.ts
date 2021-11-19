import { sequelize, Example } from "./models/Example";

const main = async () => {
  await sequelize.sync();

  const ex1 = new Example({ message: "a", randomNumber: 10.2 });
  const ex2 = new Example({ message: "b", randomNumber: 11.2 });
  const ex3 = new Example({ message: "c", randomNumber: 12.2 });

  await Promise.all([ex1.save(), ex2.save(), ex3.save()]);

  const examples = await Example.findAll();

  const json = ex1.toJSON()

  console.log(examples);

  console.log(JSON.stringify(examples, null, 2));
};

main();
