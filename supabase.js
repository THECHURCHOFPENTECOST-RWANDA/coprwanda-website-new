import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://onurzkjjomwkehwkjxwj.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_IbsRZg5B1FhnJ5kFkTsOUw_PrYUN0nm';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
