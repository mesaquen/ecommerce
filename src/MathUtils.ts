export const getSellingPrice = (price: number, discount: number): number => {
    const hasDiscount = discount > 0;
    if (hasDiscount) {
      return (1 - discount / 100) * price
    }
    return price
  }