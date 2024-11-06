import React from 'react';

const Users = (props) => {
    const style = {
        fontWeight: 'bold'
    }

    return (
        <div className="container">
            <div className="mt-3 fs-1 text-center text-primary" style={style}>
                TRANG USER
            </div>
            <h3 className="text-center">Xin chào các bạn mình là Lý Cao Nguyên</h3>
        </div >
    );
}

export default Users;