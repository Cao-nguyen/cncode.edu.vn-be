import React, { useEffect } from 'react';
import { useState } from 'react';
import { fetchAllUser } from '../../services/userService';
import ReactPaginate from 'react-paginate';

const Users = (props) => {
    const [listUsers, setListUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentLimit, setCurrentLimit] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        fetchUsers(currentPage)
    }, [currentPage])

    const fetchUsers = async (page) => {
        let response = await fetchAllUser(page, currentLimit);
        if (response && response.data && response.data.EC === 0) {
            setTotalPages(response.data.DT.totalPages);
            setListUsers(response.data.DT.users);
        }

        console.log(response.data)
    };

    const handlePageClick = async (event) => {
        setCurrentPage(+event.selected + 1)
    };

    return (
        <div className="container">
            <div className="manage-users-container">
                <div className="user-header">
                    <div>
                        <h3>Table Users</h3>
                    </div>
                    <div className="actions">
                        <button className="btn btn-success">
                            Làm mới
                        </button>
                        <button className="btn btn-primary">
                            Thêm mới
                        </button>
                    </div>
                </div>

                <div className="user-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope='col'>Id</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Username</th>
                                <th scope='col'>Group</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.length > 0 ?
                                <>
                                    {listUsers.map((item, index) => {
                                        return (
                                            <tr key={`row-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>{item.Group ? item.Group.name : ""}</td>
                                                <td>
                                                    <button className="btn btn-warning mx-3">Sửa</button>
                                                    <button className="btn btn-danger">Xoá</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>
                                :
                                <><span>Không có người dùng nào được tìm thấy.</span></>
                            }
                        </tbody>
                    </table>
                </div>
                {totalPages > 0 &&
                    <div className="user-footer">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={totalPages}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export default Users;