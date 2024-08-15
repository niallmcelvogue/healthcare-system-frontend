import { Link } from "@mui/material";
export const NotFoundRoute = () => {
  return (
    <div style={{
      marginTop: '13rem',       // mt-52 corresponds to 13rem (208px)
      display: 'flex',          // flex
      flexDirection: 'column',  // flex-col
      alignItems: 'center',     // items-center
      fontWeight: '600'         // font-semibold corresponds to a font weight of 600
    }}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  );
};