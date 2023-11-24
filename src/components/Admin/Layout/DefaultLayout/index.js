import Header from './Header';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Sidebar />
        </div>
    );
}

export default DefaultLayout;
