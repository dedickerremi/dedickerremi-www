export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <header className="">Layout in progress</header>
      <main className="min-h-100vh">{children}</main>
      <footer className="">Footer</footer>
    </>
  )
}

export default Layout
