interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: Number) => void;
}
const Expense = ({ expenses, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expenses) => (
          <tr key={expenses.id}>
            <td>{expenses.description}</td>
            <td>{expenses.amount}</td>
            <td>{expenses.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expenses.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Amount</td>
          <td>
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Expense;
