import { createContext } from "react";

export const ThemeContext = createContext({});

// 1. სისტემაში შესვლა ტოკენით (id = 1)
// 2. ხარჯების დიდი მასივი (სადაც ხარჯებს ვინახავთ)

// 1. user1 = 1
// 2. [{}, {}, {} , {}]

// საჭირო ცვლილებები
// 1. საცავში შევინახოთ token key ს ქვევით მომხმარებლის id
// 2. ხარჯის დამატების დროს, ხარჯის ობიექტზე გვინდა user_id ველი
// 3. ხარჯების წაკითხვის დროს ვამატებტ ფილტრაციას user_id ის ველით
// რომ წავიკითხოთ ყველა ხარჯი რომელიც ეკუთვნის სისტემაში შესულ მომხამრებელს.

/* 

  {
    id: 1,
    user_id: 1
  }

*/

// const expenses = [
//   { id: 1, user_id: 2, category: "", amount: 200 },
//   { id: 2, user_id: 3, category: "", amount: 300 },
// ];

// const token = 1

// const addExpense = () => {

//   const obj1 = {
//     name :"george"
//   }

//   // read fprm data
//   const expense = {
//     amount : amount,
//     category: category
//     user_id: token,
//   }
// }
// const myExpenses= expenses.filter(expense => expense.user_id === token)
