export default function MainContentCard({ children }){
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mt-6 overflow-x-auto">
        {children}
      </div>
    );
  };