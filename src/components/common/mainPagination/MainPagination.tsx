import React from "react";
import {Pagination} from "react-bootstrap";

interface PaginationProps {
    totalPages: number,
    currentPage: number,
    fetchPage: (page: number) => void
}

const MainPagination: React.FC<PaginationProps> = (props) => {
    let items = [];
    for (let number = 1; number <= props.totalPages; number++) {
        items.push(
            <Pagination.Item onClick={() => props.fetchPage(number)} key={number} active={number === props.currentPage}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination>
            {items}
        </Pagination>
    );
}

export default MainPagination;