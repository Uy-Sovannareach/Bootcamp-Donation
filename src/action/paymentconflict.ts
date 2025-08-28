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
    .from('paymentsconflict') // <-- updated table name
    .insert([{ full_name: fullName, message, amount: donationAmount }]);
  return { data, error };
}
