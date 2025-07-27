import { supabase } from '../core/supabase';

export const counselorService = {
  async getAllCounselors() {
    const { data, error } = await supabase
      .from('counselors')
      .select('*');
    
    if (error) throw error;
    return data;
  },

  async getCounselorWithStudents(counselorId: string) {
    const { data, error } = await supabase
      .from('counselors')
      .select(`
        *,
        students (*)
      `)
      .eq('id', counselorId)
      .single();
    
    if (error) throw error;
    return data;
  }
};