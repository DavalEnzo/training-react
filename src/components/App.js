import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";


const api = "http://localhost:8000/api/article/2"
const config = {
    headers: {Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzE3ODUzMDcsImV4cCI6MTY3NDIwNDUwNywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfU1VQRVJfQURNSU4iXSwidXNlcm5hbWUiOiJjZCJ9.j3RnE_ObqCg0e9OgF4Y7n7oVZehMEufcdWHweK_sPcM_zsr4QWESChPFd7N0Q_ZClvRGIn-5GITUz0RcAIdBUQm6VFhWouSWOc7bBCJ1xRyTkSGM5ahpFJjzjpJwZNhBBkrJ4Uv7ssMeQvQMjcrcFbJb_9FDEo6-C637gNcvNhEIW_pRTZGVsOc3kalRDFr25hI4WHbQJ2YSByEj51tPd-HkfalQIqgNBYjArKSxj-0v82_-o0B6aArEGqtj7atkSG7tyVBq0Ptxm3RBKGr04ldou5T764_RJgkKDpSZoGN2joq-SRkZG6BmghFCEUEXn1aPEc2-kHT_OYFK7SCDDC75awuAj9QglJhdLjQjxLzo4WJLCRwmboSxQW4kv638bLUlVZtADLWBG6YfiTj-0qsY1RezWMG5N239i_7SBdlzfGJrG9fxfXQzjry6ce-DtrY8KO6DUtJMlprUXD3XiGPWlcBwC2V5A4R4tKT55vEA91cLA1Fx9Do_kH_nNsNybDCWQ8jZfN96mShKkZYR55Bt-RuoiHE72AIoxG87nA_emgRJ199Zco8dGc9ZFqEVCNU2NTXFBgwe174Ct6KXUN5hUu7UoIjQnFOx5UwAxNlr80Ff3XwJ0yL-NPuhhxUNULvAycPMAfE14CpSrGbM2vjzn4QmbuGSibFfB-yQkbI`}
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
        return(<Loading />);
    } else {
        return (
            <div className="App">
                <div>
                </div>
                <header className="App-header">
                    <div className="group">
                        <button type="button"
                                className="inline-flex relative items-center pl-3 pr-1 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Messages
                            <span className="flex h-3 w-3">
                              <span
                                  className="animate-ping inline-flex absolute -top-1 -right-1 justify-center items-center h-1/3 w-3/12 rounded-full bg-sky-400 opacity-75"></span>
                              <span style={{animationFillMode: "both"}}
                                    className="inline-flex group-hover:rotate-360 group-hover:duration-1000 absolute -top-1 -right-1 justify-center items-center w-5 h-5 bg-sky-500 rounded-full"> 2</span>
                            </span>
                        </button>
                    </div>

                    <div
                        className="max-w-3xl relative pl-36 my-12 overflow-hidden p-6 border 0 rounded-lg shadow-md bg-gray-800 border-gray-700">
                        <a href="#">
                            <img className="absolute -left-6 -top-5" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
                            <p className="absolute -left-0 text-base font-medium top-32">Rédigé par raphaël</p>
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">Noteworthy
                                technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">Here are the biggest enterprise
                            technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#"
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
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
