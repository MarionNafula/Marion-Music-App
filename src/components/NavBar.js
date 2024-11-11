import  '../css/NavBar.css'
function NavBar() {
    const path = window.location.pathname
    return (
        <>
        <nav className= "nav">
           <CustomLink href="/songs">Songs</CustomLink>
           <CustomLink href="/form">Song Suggestion Form</CustomLink>
           <CustomLink href="/table">Song Suggestions Table</CustomLink>
        </nav>
        </>
    );
}
export default NavBar;


function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <a href={href}>{children}</a>
    )
}