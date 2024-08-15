import { LoginApi } from "@/api/auth/auth-api";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";

type LoginFormProps = {
    onSuccess: () => void;
  };

export const LoginForm = ({onSuccess}: LoginFormProps) => {
    async function login(values: FormikValues) {
        await LoginApi(values.email, values.password)
          .then((response) => {
            console.log('Setting token in local storage...');
            console.log(response);
            localStorage.setItem('token', response.data);
          })
          .then(onSuccess)
          .catch((error) => console.error(error));
      }
    
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email is a required field"),
        password: Yup.string()
          .required("Password is a required field")
          .min(8, "Password must be at least 8 characters"),
      });
    return (
    <>
    <Formik
    validationSchema={schema}
    initialValues={{ email: "", password: "" }}
    onSubmit={(values) => {
      login(values);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => (
      <div className="flex flex-col items-center pt-8 mx-auto w-full max-w-md">
        <div className="relative z-10 bg-white rounded-lg shadow-lg max-w-md mx-auto p-8">
          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            <span className="text-3xl font-extrabold text-primary mb-6 block">Login</span>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter email id / username"
              className="w-full bg-gray-100 border border-transparent rounded-md p-3 text-base text-gray-900 focus:bg-gray-200 outline-none"
              id="email"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.email && touched.email && errors.email}
            </p>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Enter password"
              className="w-full bg-gray-100 border border-transparent rounded-md p-3 text-base text-gray-900 focus:bg-gray-200 outline-none"
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.password && touched.password && errors.password}
            </p>

            <button
              type="submit"
              className="w-full bg-primary text-white rounded-md py-3 text-base font-semibold hover:bg-[#395591] transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )}
  </Formik>
  </>);
}