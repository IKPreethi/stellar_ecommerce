using Stellar.DB;
using System;
using System.Collections.Generic;
using System.Text;

namespace Stellar.Core
{
    public interface IExpensesServices
    {
        List<Expense> GetExpenses();
        Expense GetExpense(int id);
        Expense CreateExpense(Expense expense);

        void DeleteExpense(Expense expense);

        Expense EditExpense(Expense expense);
    }
}
