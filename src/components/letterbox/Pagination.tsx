import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <PageWrapper>
      <PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </PageButton>
      <PageNumber>{currentPage}</PageNumber>
      <PageButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {">"}
      </PageButton>
    </PageWrapper>
  );
};

export default Pagination;

const PageWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0rem; /* 20px 아래로 이동 */
  transform: translateX(-50%);
  width: 6.4375rem;
  height: 1.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem;
`;

const PageButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #000000;

  &:disabled {
    cursor: not-allowed;
  }
`;

const PageNumber = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
`;
