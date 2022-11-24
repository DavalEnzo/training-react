import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Button } from "flowbite-react";


const api = "http://localhost:8000/api/article/2"
const config = {
    headers: {Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjkyMTQ0NTAsImV4cCI6MTY3MTYzMzY1MCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfU1VQRVJfQURNSU4iXSwidXNlcm5hbWUiOiJjZCJ9.Pkveovrcivhdw0Fcgh7PO3tOo7VRMZaR7nghF56C5Bv4CA9Sv0IbtkS3XYb28COpsueRC4MJ4B1LV8vtEX9JKCye5jJNG_dbSjVSNwbF-f3Ob19tLy1mLUSP3zmLACAdl48Unwgw-O4K4iUmvPh980kH_PqErtOEUJdXxsoMhqI88T0P5CMFEC_z4RDVSW9X7L02nYJMiHdnIHOIGCXuqJc9pr2BgLaapNJ6_72NYY9TrBEeTiZMSyM6plmWN3i1e7sxbUJkL6I2TwZgso6FaR58Ep0g6lmBzttiY1IPL28S3hIByJblFUTKrtfVaRRC8uKMPh8QIci9Zpr3H4-DGzR9mI5vNDTYmcBLN6dirqeQZm8LcPz6VgwjxhBQPoBdqWL4jZFnnpIG3iSPtpi16umKYIL4D_-x39TOp6lLt-DqTEufDnY97JlIhTE0OUSUPEm5jZ-3D-2nTyIWaw_Gh7p2S8mN6qtKWPDNJKTekj9V9yiLHS7FhDkzWmI5YYCvbG1g8xFsoi1vjerT-ifXtBvyth2xGjdr7GKhx2V1OdXBhMj9gvjJ8J1Nxlkx4o9JoVER1trje9zO08qYY_o5WqaIxw6KKQvnUBFHgjRfp3x09nrV238zwir0EBfBINXoR8BB8EGcmoYWDZlhJVUqUumd_j2GsYYog_O4O9E5_so`}
};

function App() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const fn = async () => {
            try {
                const res = await axios.get(api, config);
                setData(res.data);
                const id = res.data.compte.id;
                const res2 = await axios.get(`http://localhost:8000/api/compte/${id}`, config);
                await setData2(res2.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        }

        fn();
    }, []);

    if (isLoading) {
        return <div className="App-header">
            <Button>
                <Spinner color="blue" size="xl" aria-label="Spinner button example"/>
                <span className="pl-3">
      Chargement des données
    </span>
            </Button>
        </div>;
    } else {
        return (
            <div className="App">
                <div>
                </div>
                <header className="App-header">
                    <div>
                        <button type="button"
                                className="inline-flex relative items-center pl-3 pr-1 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Messages
                            <span className="flex h-3 w-3">
  <span className="animate-ping inline-flex absolute -top-1 -right-1 justify-center items-center h-1/3 w-1/5 rounded-full bg-sky-400 opacity-75"></span>
  <span className="inline-flex absolute -top-1 -right-1 justify-center items-center w-5 h-5 bg-sky-500 rounded-full"> 2</span>
</span>
                        </button>
                    </div>

                    <p>
                        {data.label} <br></br>
                        {data2.label}
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
