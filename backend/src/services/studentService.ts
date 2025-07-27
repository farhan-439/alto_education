import { supabase } from '../core/supabase';

export const studentService = {
  async getAllStudents() {
    const { data, error } = await supabase
      .from('students')
      .select(`
        *,
        counselors (name, email)
      `);
    
    if (error) throw error;
    return data;
  },

  async getStudentById(studentId: string) {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .eq('id', studentId)
      .single();
    
    if (error) throw error;
    return data;
  }
};