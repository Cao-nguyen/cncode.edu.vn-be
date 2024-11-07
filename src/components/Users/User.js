import React from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Users = (props) => {
    // let history = useHistory()

    const style = {
        fontWeight: 'bold'
    }

    // useEffect(() => {
    //     let session = sessionStorage.getItem('account')
    //     if (!session) {
    //         history.push('/login')
    //     }
    // }, [])

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