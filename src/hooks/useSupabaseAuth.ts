import useUserStore from '@/src/store/useUserStore';
import supabase from '@/src/utils/supabase';

function useSupabaseAuth() {
	const { session, setSession, setUser } = useUserStore();

	const loginWithEmail = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		return { data, error };
	};

	const registerWithEmail = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signUp({ email, password });
		return { data, error };
	};

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (!error) {
			setUser(undefined);
			setSession(undefined);
		}
		return { error };
	};

	const getUserProfile = async () => {
		if (!session?.user) throw new Error('No user session!');
		const { data, error, status } = await supabase
			.from('profiles')
			.select('username, full_name, avatar_url, website')
			.eq('id', session?.user.id)
			.single();
		return { data, error, status };
	};

	const updateUserProfile = async (
		username: string,
		fullName: string,
		avatarUrl: string,
		website: string
	) => {
		if (!session?.user) throw new Error('No user session!');
		const { error } = await supabase.from('profiles').upsert({
			username,
			full_name: fullName,
			avatar_url: avatarUrl,
			website,
			updated_at: new Date(),
		});
		return { error };
	};

	return {
		loginWithEmail,
		registerWithEmail,
		logout,
		getUserProfile,
		updateUserProfile,
	};
}

export default useSupabaseAuth;
