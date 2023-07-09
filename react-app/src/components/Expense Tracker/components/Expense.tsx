interface Expense {
  id: number;
  description: string;
  Amount: number;
  Category: string;
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
        {/* // here we will be creating the table for storing the expenses */}
        {/* {The list is made with the help of props} */}
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.Amount}</td>
            <td>{expense.Category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
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
            $
            {expenses
              .reduce((acc, expense) => expense.Amount + acc, 0)
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
