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
    .from('paymentskanthabopha')
    .insert([{ full_name: fullName, message, amount: donationAmount }]);
  return { data, error };
}

export async function getTotalRaised() {
  const { data, error } = await supabase
    .from('paymentskanthabopha')
    .select('amount');
  if (error) return 0;
  return data?.reduce((sum, row) => sum + (row.amount || 0), 0) || 0;
}

export async function getDonorCount() {
  const { count, error } = await supabase
    .from('paymentskanthabopha')
    .select('id', { count: 'exact', head: true });
  if (error) return 0;
  return count || 0;
}

export async function getRecentDonations(limit = 5) {
  const { data, error } = await supabase
    .from('paymentskanthabopha')
    .select('full_name, message, amount, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) return [];
  return data || [];
}

export async function getDonorsByAmount() {
  const { data, error } = await supabase
    .from('paymentskanthabopha')
    .select('full_name, amount')
    .order('amount', { ascending: false });
  
  if (error) {
    console.error('Error fetching donors by amount:', error);
    return [];
  }
  
  return data || [];
}
