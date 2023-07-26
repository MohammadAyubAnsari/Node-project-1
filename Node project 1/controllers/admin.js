const bodyParser = require("body-parser");

const Expense = require("../models/expenses");

exports.getExpenseDetails = async (req, res, next) => {
  const exp = await Expense.findAll();
  res.status(201).json({ allExpense: exp });
};

exports.postExpenseDetails = async (req, res, next) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    console.log(req.body);

    const data = await Expense.create({
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    });
    res.status(201).json({ newExpenseDetail: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.deleteExpenseDetails = async (req, res, next) => {
  const uId = req.params.id;
  await Expense.destroy({ where: { id: uId } });
  res.sendStatus(200);
};
