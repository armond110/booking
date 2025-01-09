import { Typography } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export default function Footer() {
  return(
    <footer className="px-2 py-20 text-center text-black border-t-2 bottom-0">
      <div className="container mx-auto flex flex-col items-center">
        
        <Typography
          color="blue-gray"
          className=" !text-sm !font-normal text-black"
        >
          &copy; {currentYear} PlanTrip
        </Typography>
      </div>
    </footer>
  )
}