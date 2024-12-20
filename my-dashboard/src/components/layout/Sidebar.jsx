import { 
    DashboardOutlined,
    WorkOutlineOutlined,
    TimelineOutlined,
    CalendarTodayOutlined,
    DescriptionOutlined,
    GavelOutlined,
    CloseOutlined
  } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Illustration from '../../assets/image.png'

  
  export default function Sidebar ({ isOpen, onClose }){
    const menuItems = [
      { icon: DashboardOutlined, text: 'Dashboard' },
      { icon: WorkOutlineOutlined, text: 'My Cases' },
      { icon: TimelineOutlined, text: 'Activities' },
      { icon: CalendarTodayOutlined, text: 'Calendar' },
      { icon: DescriptionOutlined, text: 'Files' },
      { icon: GavelOutlined, text: 'Dispute' }
    ];
  
    return (
      <>
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={onClose}
          />
        )}
        
        <aside className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-white shadow-sm transform transition-transform duration-200 ease-in-out
          md:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="flex justify-end p-2 md:hidden">
            <IconButton onClick={onClose} size="small">
              <CloseOutlined />
            </IconButton>
          </div>
          
          <nav className="px-4 py-6 h-screen">
            {menuItems.map((Item, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer
                  ${Item.text === 'Open a Dispute' ? 'text-blue-600' : 'text-gray-600'}
                  hover:bg-gray-50`}
              >
                <Item.icon className="h-5 w-5" />
                <span>{Item.text}</span>
              </div>
            ))}
          </nav>
          
          <div className="px-4 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium">Get Justice on every Claims</h3>
            <div className="mt-4 hidden md:block">
              <img src = {Illustration}/>
            </div>
          </div>
        </div>
        </aside>
      </>
    );
  };