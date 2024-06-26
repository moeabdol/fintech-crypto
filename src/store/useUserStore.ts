import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Session, User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UserStore = {
	user: User | undefined;
	setUser: (user: User | undefined) => void;
	session: Session | undefined;
	setSession: (session: Session | undefined) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
	isOnBoarded: boolean;
	setIsOnBoarded: (isOnBoarded: boolean) => void;
};

const useUserStore = create(
	persist<UserStore>(
		set => ({
			user: undefined,
			setUser: user => set({ user }),
			session: undefined,
			setSession: session => set({ session }),
			isLoggedIn: false,
			setIsLoggedIn: isLoggedIn => set({ isLoggedIn }),
			isOnBoarded: false,
			setIsOnBoarded: isOnBoarded => set({ isOnBoarded }),
		}),
		{
			name: 'fintechcrypto-user-store',
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);

export default useUserStore;
