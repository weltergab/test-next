function Layout({ children }) {
  return (
      <div>
        <div className='flex col'>
        {children}
        </div>
      </div>
  );
}

export default Layout;