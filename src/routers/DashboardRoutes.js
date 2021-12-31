
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from '../components/ui/NavBar';
import { Route, Routes } from "react-router";
import { HeroScreen } from "../components/hero/HeroScreen";
import Loading from "../components/loading/Loading";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="loading" element={<Loading />} />
                    

                    <Route path="hero/:heroeId" element={<HeroScreen />} />
                    
                    
                    <Route path="/" element={<MarvelScreen />} />
                        
                </Routes>     
            </div>
        </>
    )
}
