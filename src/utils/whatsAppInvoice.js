export const whatsAppInvoice = (cartItems, totalAmount) => {
  const invoice = cartItems.map(
    (item, index) => `المنتج ${index + 1}:
      اسم المنتج: ${item.name}\n
      السعر: ${item.price}\n
      الكمية: ${item.quantity}\n
      السعر الاجمالي للمنتج: ${item.quantity * item.price}\n
      ------------\n
      `
  );
  return `
    مرحبا, لقد اعجبتني المنتجات التالية:\n
    ${invoice}
    السعر الاجمالي للفاتورة: ${totalAmount}
    `;
};
