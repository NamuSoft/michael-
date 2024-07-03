const Sidebar = () => {
  return (
    <div className='bg-black p-4 text-white'>
      <ul className='space-y-6'>
        <li className='cursor-pointer hover:text-gray-400'>ABOUT ME</li>
        <li className='cursor-pointer hover:text-gray-400'>PORTFOLIO</li>
        <li className='flex cursor-pointer items-center hover:text-gray-400'>
          SERVICES
          <div className='ml-2 h-2 w-2 rounded-full border-2 border-white'></div>
        </li>
        <li className='cursor-pointer hover:text-gray-400'>TESTIMONIAL</li>
        <li className='cursor-pointer hover:text-gray-400'>RESUME</li>
        <li className='cursor-pointer hover:text-gray-400'>BLOG</li>
        <li className='cursor-pointer hover:text-gray-400'>CONTACT</li>
      </ul>
    </div>
  );
};

export default Sidebar;
