import React from 'react';

const Home = (props) => {
    const style = {
        fontWeight: 'bold'
    }

    return (
        <div className="container">
            <div className="mt-3 fs-1 text-center text-primary" style={style}>
                LÝ CAO NGUYÊN
            </div>
            <h3 className="text-center">Xin chào các bạn mình là Lý Cao Nguyên</h3>
        </div >
    );
}

export default Home;