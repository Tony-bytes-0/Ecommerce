import { Grid } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { id: 1, label: "Inicio", href: "/" },
    { id: 2, label: "Tienda", href: "/tienda" },
    { id: 2, label: "Ingresar", href: "/login" },
    // Add more links as needed
  ];

  return (
    <Grid container className="bg-gray-200">
      <Grid item xs={12} className={`flex flex-row p-2 items-end`}>
        {links.map((link) => (
          <Grid item key={link.id}>
            <Link href={link.href} className="flex px-6">
              <p className="p-5 rounded-md shadow-lg">{link.label}</p>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default NavBar;
