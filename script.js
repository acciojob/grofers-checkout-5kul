window.onload = function () {
  const priceCells = document.querySelectorAll(".prices");
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.innerText);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Create new row
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2; // Span both columns
  totalCell.innerText = `Total: ₹${total}`;
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);

  // Append to the table
  const table = document.getElementById("grocery-table");
  table.appendChild(totalRow);
};
