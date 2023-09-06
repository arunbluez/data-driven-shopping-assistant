import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import mmsLogo from "../assets/MMSE_Logo.svg"

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="w-full px-8 flex items-center justify-between">
            <img src={mmsLogo} alt="logo" width={200} />
            <p className="text-4xl font-black">
              <span className="font-light">TEAM</span>11
            </p>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
