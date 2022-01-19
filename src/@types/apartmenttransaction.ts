export type ApartmentTransaction = {
  RowID: number | string;
  DateFrom: string;
  DateTo: string;
  Nights: number;
  PriceAccomodation: number;
  BookingSource: string;
  PriceMinusSourceCommision: number;
  PriceMinusTax: number;
  PriceMinusBreakfast: number;
  PriceMinusBHCommision: number;
};