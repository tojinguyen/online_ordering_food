import { AuthService } from '../services/AuthService';

export const useAuth = () => {
    const login = async (email: string, password: string) => {
        await AuthService.login({ email, password });
    };
};
