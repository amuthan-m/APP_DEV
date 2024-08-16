import { Progress } from "antd";
import React from "react";
import "../resources/analatics.css";

function Analatics({ transactions }) {
  const totalTransactions = transactions.length;
  //console.log("Transactions Data:", transactions);
  // Filter transactions by type
  const totalIncomeTransactions = transactions.filter(transaction => transaction.type === "income");
  const totalExpenseTransactions = transactions.filter(transaction => transaction.type === "expense");
  //  console.log("Total Income Transactions:", totalIncomeTransactions);
  //console.log("Total Expense Transactions:", totalExpenseTransactions);
  // Calculate percentages
  const totalIncomeTransactionsPercentage = totalTransactions === 0 ? 0 : (totalIncomeTransactions.length / totalTransactions) * 100;
  const totalExpenseTransactionsPercentage =
    totalTransactions === 0
      ? 0
      : (totalExpenseTransactions.length / totalTransactions) * 100;


  // calculate turnover values    
  // const totalTurnover = transactions.reduce(
    //   (acc, transaction) => acc + transaction.amount,
  //   0
  // );
  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
    // const totalIncomeTurnoverPercentage =
    //   (totalIncomeTurnover / totalTurnover) * 100;

      const totalExpenseTurnover = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    console.log(totalExpenseTurnover);
    // const totalExpenseTurnoverPercentage =
    //   (totalExpenseTurnover / totalTurnover) * 100;


  

  const categories = [
    "charity",
    "education",
    "entertainment",
    "food",
    "freelance",
    "fuel",
    "gifts",
    "groceries",
    "healthcare",
    "insurance",
    "investments",
    "rent",
    "salary",
    "savings",
    "shopping",
    "subscriptions",
    "taxes",
    "transportation",
    "travel",
    "utilities",
    "Other"
  ];

  return (
    <div className="analytics">
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="transactions-count">
            <h4>Total Transactions: {totalTransactions}</h4>
            <hr />
            <h5>Income: {totalIncomeTransactions.length}</h5>
            <h5>Expense: {totalExpenseTransactions.length}</h5>

            <div className="progress-bars">
              <div className="progress-bar-wrapper">
                <Progress
                  className="progress-income"
                  strokeColor="#1EBDC4"
                  type="circle"
                  percent={totalIncomeTransactionsPercentage.toFixed(0)}
                />
              </div>
              <div className="progress-bar-wrapper">
                <Progress
                  className="progress-expense"
                  strokeColor="#FF7777"
                  type="circle"
                  percent={totalExpenseTransactionsPercentage.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>


    

      </div>

      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Income - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter(
                  (t) => t.type === "income" && t.category === category
                )
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card" key={category}>
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#78ABA8"
                      percent={totalIncomeTurnover === 0 ? 0 : ((amount / totalIncomeTurnover) * 100).toFixed(0)}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Expense - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter(
                  (t) => t.type === "expense" && t.category === category
                )
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card" key={category}>
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#EF9C66"
                      percent={totalExpenseTurnover === 0 ? 0 : ((amount / totalExpenseTurnover) * 100).toFixed(0)}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analatics;









































































































































































































//turnover html
// <div className="col-md-6 mt-3">
// <div className="transactions-count">
//   <h4>Total Turnover: {totalTurnover}</h4>
//   <hr />
//   <h5>Income: {totalIncomeTurnover}</h5>
//   <h5>Expense: {totalExpenseTurnover}</h5>

//   <div className="progress-bars">
//     <div className="progress-bar-wrapper">
//       <Progress
//         className="progress-income"
//         strokeColor="#5DD64F"
//         type="circle"
//         percent={totalIncomeTurnoverPercentage.toFixed(0)}
//       />
//     </div>
//     <div className="progress-bar-wrapper">
//       <Progress
//         className="progress-expense"
//         strokeColor="#E5572F"
//         type="circle"
//         percent={totalExpenseTurnoverPercentage.toFixed(0)}
//       />
//     </div>
//   </div>
// </div>



// import { Progress } from "antd";
// import React from "react";
// import "../resources/analatics.css";
// function Analatics({ transactions }) {
//   const totalTransactions = transactions.length;
//   const totalIncomeTransactions = transactions.filter(
//     (transaction) => transaction.type === "income"
//   );
//   const totalExpenceTransactions = transactions.filter(
//     (transaction) => transaction.type === "expence"
//   );
//   const totalIncomeTransactionsPercentage =
//     (totalIncomeTransactions.length / totalTransactions) * 100;
//   const totalExpenceTransactionsPercentage =
//     (totalExpenceTransactions.length / totalTransactions) * 100;

//   const totalTurnover = transactions.reduce(
//     (acc, transaction) => acc + transaction.amount,
//     0
//   );
//   const totalIncomeTurnover = transactions
//     .filter((transaction) => transaction.type === "income")
//     .reduce((acc, transaction) => acc + transaction.amount, 0);
//   const totalExpenceTurnover = transactions
//     .filter((transaction) => transaction.type === "expence")
//     .reduce((acc, transaction) => acc + transaction.amount, 0);
//   console.log(totalExpenceTurnover);
//   const totalIncomeTurnoverPercentage =
//     (totalIncomeTurnover / totalTurnover) * 100;
//   const totalExpenceTurnoverPercentage =
//     (totalExpenceTurnover / totalTurnover) * 100;

//   const categories = [
//     "salary",
//     "entertainment",
//     "freelance",
//     "food",
//     "travel",
//     "investment",
//     "education",
//     "medical",
//     "tax",
//   ];

//   return (
//     <div className="analytics">
//       <div className="row">
//         <div className="col-md-4 mt-3">
//           <div className="transactions-count">
//             <h4>Total Transactions : {totalTransactions}</h4>
//             <hr />
//             <h5>Income : {totalIncomeTransactions.length}</h5>
//             <h5>Expence : {totalExpenceTransactions.length}</h5>

//             <div className="progress-bars">
//               <Progress
//                 className="mx-5"
//                 strokeColor="#5DD64F"
//                 type="circle"
//                 percent={totalIncomeTransactionsPercentage.toFixed(0)}
//               />
//               <Progress
//                 strokeColor="#E5572F"
//                 type="circle"
//                 percent={totalExpenceTransactionsPercentage.toFixed(0)}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4 mt-3">
//           <div className="transactions-count">
//             <h4>Total Turnover : {totalTurnover}</h4>
//             <hr />
//             <h5>Income : {totalIncomeTurnover}</h5>
//             <h5>Expence : {totalExpenceTurnover}</h5>

//             <div className="progress-bars">
//               <Progress
//                 className="mx-5"
//                 strokeColor="#5DD64F"
//                 type="circle"
//                 percent={totalIncomeTurnoverPercentage.toFixed(0)}
//               />
//               <Progress
//                 strokeColor="#E5572F"
//                 type="circle"
//                 percent={totalExpenceTurnoverPercentage.toFixed(0)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//        <hr />
//       <div className="row">
//         <div className="col-md-6">
//           <div className="category-analysis">
//             <h4>Income - Category Wise</h4>
//             {categories.map((category) => {
//               const amount = transactions
//                 .filter((t) => t.type == "income" && t.category === category)
//                 .reduce((acc, t) => acc + t.amount, 0);
//               return (
//                 amount > 0 && <div className="category-card">
//                   <h5>{category}</h5>
//                   <Progress strokeColor='#0B5AD9' percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="category-analysis">
//             <h4>Expence - Category Wise</h4>
//             {categories.map((category) => {
//               const amount = transactions
//                 .filter((t) => t.type == "expence" && t.category === category)
//                 .reduce((acc, t) => acc + t.amount, 0);
//               return (
//                amount > 0 && <div className="category-card">
//                   <h5>{category}</h5>
//                   <Progress strokeColor='#0B5AD9' percent={((amount / totalExpenceTurnover) * 100).toFixed(0)} />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Analatics;
// </div> 