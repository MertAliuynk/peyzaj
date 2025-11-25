type SessionWithUser = {
  user?: {
    id: string;
    email: string;
    name?: string;
    role?: string;
  };
  [key: string]: any;
};
import getServerSession from 'next-auth';
import { authOptions } from '../auth/config';

export const getServerAuthSession = () => {
  return getServerSession(authOptions);
};

export const requireAuth = async (): Promise<SessionWithUser> => {
  const session = await getServerAuthSession() as SessionWithUser;
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }
  return session;
};

export const requireAdmin = async (): Promise<SessionWithUser> => {
  const session = await requireAuth();
  if (session.user?.role !== 'ADMIN') {
    throw new Error('Admin access required');
  }
  return session;
};