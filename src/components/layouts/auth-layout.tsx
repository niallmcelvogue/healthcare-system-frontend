import { Head } from '@/components/seo';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 px-6 sm:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="flex justify-center">
            {/* You can place the logo or additional elements here */}
          </div>
          <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-8 mx-auto w-full max-w-md">
          <div className="bg-white p-8 shadow-sm rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
