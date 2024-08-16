const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();
const moment = require("moment");

router.post("/add-transaction", async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.send("Transaction Added Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/get-all-transactions", async (req, res) => {
  const { frequency, selectedRange , type } = req.body;

  try {
    const startDate = selectedRange && selectedRange[0] ? new Date(selectedRange[0]) : null;
    const endDate = selectedRange && selectedRange[1] ? new Date(selectedRange[1]) : null;

    const transactions = await Transaction.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: startDate,
              $lte: endDate,
            },
          }),
      userid: req.body.userid,
      ...(type !== 'all' && {type})
    });

    res.send(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


module.exports = router;

router.post("/edit-transaction", async function (req, res) {
  try {
    await Transaction.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.send("Transaction Updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/delete-transaction", async function (req, res) {
  try {
    await Transaction.findOneAndDelete({ _id: req.body.transactionId });
    res.send("Transaction Updated Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get("/get-all-transactions", async (req, res) => {
//   const { frequency, selectedRange, type } = req.body;
//   try {
//     const transactions = await Transaction.find({
//       ...(frequency !== "custom"
//         ? {
//             date: {
//               $gt: moment().subtract(Number(req.body.frequency), "d").toDate(),
//             },
//           }
//         : {
//             date: {
//               $gte: selectedRange[0],
//               $lte: selectedRange[1],
//             },
//           }),
//       userid: req.body.userid,
//       ...(type !== "all" && { type }),
//     });

//     res.send(transactions);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// module.exports = router;
