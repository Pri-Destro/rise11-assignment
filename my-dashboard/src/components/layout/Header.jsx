import logoImg from "../../assets/logo/master-logo.png"
import { 
  PersonOutlineOutlined,
  NotificationsNoneOutlined,
  MenuOutlined 
} from '@mui/icons-material';

import { IconButton } from '@mui/material';

export default function Header({onMenuClick}) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">

      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        <div className="flex items-center space-x-4">
          
          <IconButton 
            onClick={onMenuClick}
            className="md:hidden"
            size="small"
          >
            <MenuOutlined/>
          </IconButton>
          <img src={logoImg} alt="Jur Logo" className="h-12" />
        </div>
        <div className="flex items-center space-x-4">
          <IconButton size="small" className="text-blue-600">
            <NotificationsNoneOutlined />
          </IconButton>
          <IconButton size="small">
            <PersonOutlineOutlined />
          </IconButton>
        </div>
      </div>

    </header>
  );
};
