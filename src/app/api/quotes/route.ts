import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase.from('quotes').select('*');
    if (error) {
      console.error('Supabase fetch error:', error);
      return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 });
    }
    return NextResponse.json({ quotes: data || [] }, { status: 200 });
  } catch (err) {
    console.error('Quotes API error:', err);
    return NextResponse.json({ error: 'Failed to read quotes' }, { status: 500 });
  }
}
