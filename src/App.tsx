import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import {store} from "./store/store";
import {Provider} from "react-redux";

const Layout = lazy(() => import("./modules/Layout"))

export default function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div><p>Loading...</p></div>}>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}


