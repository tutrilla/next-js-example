import styles from './invoices.module.css'; // Import the CSS module

const fakeInvoices = [
    { id: 1, invoiceNumber: 'INV001', amount: 100.0, date: '2024-01-01' },
    { id: 2, invoiceNumber: 'INV002', amount: 150.0, date: '2024-01-05' },
    { id: 3, invoiceNumber: 'INV003', amount: 200.0, date: '2024-01-10' },
    // Add more fake invoices as needed
  ];

  const InvoicesPage: React.FC = () => {
    return (
        <div>
          <h1>Invoices Page</h1>
          <table className={styles.invoiceTable}>
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Amount</th>
                <th>Date</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {fakeInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.invoiceNumber}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.date}</td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default InvoicesPage;