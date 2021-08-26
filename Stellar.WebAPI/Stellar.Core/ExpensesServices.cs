using Stellar.DB;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Stellar.Core
{
    public class ExpensesServices : IExpensesServices
    {
        private AppDbContext _context;
        public ExpensesServices(AppDbContext context)
        {
            _context = context;
        }
        public List<Expense> GetExpenses()
        {
            return _context.Expenses.ToList();
        }

        public Expense CreateExpense(DB.Expense expense)
        {
            _context.Add(expense);
            _context.SaveChanges();

            return expense;
        }

        public void DeleteExpense(Expense expense)
        {
            _context.Remove(expense);
            _context.SaveChanges();
        }

        public Expense GetExpense(int id) =>
            _context.Expenses
                .First(e => e.Id == id);

        public Expense EditExpense(Expense expense)
        {
            Expense existingExpense = _context.Expenses.First(x => x.Id == expense.Id);
            existingExpense.Description = expense.Description;
            existingExpense.Amount = expense.Amount;

            _context.SaveChanges();
            return existingExpense;
        }
    }


}
