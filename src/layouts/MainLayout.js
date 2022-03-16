import Navs from "../components/Nav";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navs />
            {children}
        </div>

    );
};

export default MainLayout;