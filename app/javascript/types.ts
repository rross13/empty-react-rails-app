export interface Category {
  categoryId: number,
  categoryName: string,
  description: string,
  currentBalance: number,
  isYearly: boolean,
  countUp: boolean,
  listOfCashFlows: string
}

export enum AllowanceType {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export interface BudgetPicker {
  name: string;
  value: string;
}