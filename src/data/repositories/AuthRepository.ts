import { ApiClient } from '../api/ApiClient';
import { LoginDTO } from '../../domain/dtos/auth/LoginDTO';
import { User } from '../../domain/models/User';

export class AuthRepository {
    static async login(credentials: LoginDTO): Promise<User> {
        const response = await ApiClient.post('/auth/login', credentials);
        return response.data as User;
    }
}
