import { UsersRepository } from "../repositories/user.repository";

export class UsersService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.usersRepository.findByUsername(username);
    if (!user) return false;
    if (user.password !== password) return false;
    return true;
  }
}
