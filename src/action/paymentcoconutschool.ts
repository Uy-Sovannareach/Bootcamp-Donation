import { supabase } from '../../utils/supabase/client';

export async function storePayment({
  fullName,
  message,
  donationAmount,
}: {
  fullName: string;
  message: string;
  donationAmount: number;
}) {
  const { data, error } = await supabase
    .from('paymentscoconutschool') // <-- updated table name
    .insert([{ full_name: fullName, message, amount: donationAmount }]);
  return { data, error };
}

export async function getTotalRaised() {
  const { data, error } = await supabase
    .from('paymentscoconutschool')
    .select('amount')
  if (error) return 0;
  // Sum all amounts
  return data?.reduce((sum, row) => sum + (row.amount || 0), 0) || 0;
}
