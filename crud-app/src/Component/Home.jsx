import { Box, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Style.css';
import Logo from './Images/Project_Logo.png';


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {
    const [searchApiData, setSearchApiData] = useState([]);
    const [data, setData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:8080/')
                .then(response => response.json())
                .then(json => {
                    setData(json)
                    setSearchApiData(json)
                })
        }
        fetchData();
    }, [])
    const handleFilter = (e) => {
        if (e.target.value == ' ') {
            setData(setSearchApiData)
        }
        else {
            const filterResult = searchApiData.filter(item => item.cabName.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filterResult)
        }
        setFilterVal(e.target.value)
    }

    function buttonanimate() {
        (this).parent().toggleClass('open');
    }
    // ('.search-button').click(function(){
    //     (this).parent().toggleClass('open');
    //   });

    return (
        <Header>
            <div>
                <img style={{ marginLeft: '25%' }} src={Logo} />
                <h1 style={{ textAlign: 'center', fontSize: 50 }}>A project by TEAM AMEYA</h1>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                        <div></div>
                        <div>
                            <h1 style={{ marginLeft:100}}>Our Registered Cab</h1>
                        </div>
                        <div >
                            <form action="" class="search-bar" >
                                <input type="search" name="search" pattern=".*\S.*" required />
                                <button class="search-btn" type="submit">
                                    <span>Search</span>
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* <div className="search">
                        <input type="search"  className="search-box" onClick={buttonanimate} value={filterVal} onInput={(e) => handleFilter(e)}/>
                        <span  className="search-button">
                            <span  className="search-icon"></span>
                        </span>
                    </div> */}
                    {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: 200 }} >
                        <input placeholder='Search' value={filterVal} onInput={(e) => handleFilter(e)} />
                    </div> */}
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        {
                            data.map(item => {
                                var a = "";

                                return (

                                    <tbody>
                                        <tr>
                                            <td>{item.cabID}</td>
                                            <td>{item.cabName}</td>
                                            <td>{item.cabColor}</td>
                                            <td>{item.cabNumber}</td>
                                        </tr>
                                    </tbody>
                                )


                            })
                        }
                    </table>
                </div>
            </div>

        </Header>
    )
}

export default CodeForInterview;