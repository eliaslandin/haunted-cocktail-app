export const usePrint = () => {
  const print = (element: Element) => {
    const printWindow = window.open("", "", "height=600,width=800");
    if (!printWindow) return;

    const container = printWindow.document.createElement("div");
    container.appendChild(element.cloneNode(true));
    printWindow.document.body.appendChild(container);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return print;
};
