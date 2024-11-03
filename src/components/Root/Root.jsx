import Header from '../LayOut/Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <main>
                <header>
                    <Header />
                </header>

                <div>
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default Root;