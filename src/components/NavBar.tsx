import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import mmsLogo from "../assets/MMSE_Logo.svg";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="w-full px-2 md:px-8 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={mmsLogo} alt="MMS" />
            </div>
            <p className="text-2xl font-black">
              <span className="font-light">TEAM</span>11
            </p>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
