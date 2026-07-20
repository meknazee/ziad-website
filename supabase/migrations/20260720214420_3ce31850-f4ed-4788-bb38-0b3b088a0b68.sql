DROP POLICY IF EXISTS "Authenticated can read bookings" ON public.bookings;
CREATE POLICY "Clients read own bookings" ON public.bookings FOR SELECT TO authenticated USING (auth.uid() = client_id);