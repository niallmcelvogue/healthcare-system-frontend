import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthLayout } from '@/components/layouts/auth-layout';
import { LoginForm } from "@/features/auth/login-form";

export const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  return (
    <AuthLayout title="Login to your account">
      <LoginForm onSuccess={() => navigate('/dashboard')}/>
    </AuthLayout>
  );
};
