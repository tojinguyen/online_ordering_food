import { AuthRepository } from '../../data/repositories/AuthRepository';
import { LoginDTO } from '../../domain/dtos/auth/LoginDTO';
import { User } from '../../domain/models/User';
import { storeToken } from '../../utils/storage/storage';

export class AuthService {
    static async login(credentials: LoginDTO): Promise<User> {
        const user = await AuthRepository.login(credentials);
        await storeToken(user.token);
        return user;
    }
}
