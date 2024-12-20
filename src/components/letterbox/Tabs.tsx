import styled from "styled-components";

interface TabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs = ({ activeTab, onTabClick }: TabsProps) => {
  return (
    <TabsContainer>
      <TabButton active={activeTab === "total"} onClick={() => onTabClick("total")}>
        전체보기
      </TabButton>
      <TabButton active={activeTab === "received"} onClick={() => onTabClick("received")}>
        받은 편지함
      </TabButton>
      <TabButton active={activeTab === "sent"} onClick={() => onTabClick("sent")}>
        보낸 편지함
      </TabButton>
      <TabButton active={activeTab === "draft"} onClick={() => onTabClick("draft")}>
        내게 쓴 편지함
      </TabButton>
      <TabButton active={activeTab === "save"} onClick={() => onTabClick("save")}>
        저장한 편지함
      </TabButton>
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div`
  padding: 0rem 0.625rem;
  display: flex;
  gap: 0.375rem;
  margin-bottom: -2.1875rem;
  align-self: flex-start;
  margin-left: calc((100% - 80rem) / 2);
  margin-top: 2.1875rem;
  height: 3.1875rem;

  @media (max-width: 48rem) {
    flex-wrap: wrap;
    gap: 0.625rem;
    justify-content: center;
    margin-left: 0;
  }
`;

const TabButton = styled.button<{ active?: boolean }>`
  padding: 0.625rem 1.25rem;
  font-size: 1.375rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ active }) => (active ? "#fff" : "#333")};
  background: ${({ active }) => (active ? "#333" : "#fff")};
  border-radius: 0.3125rem 1.25rem 0 0;
  box-shadow: 0.25rem -0.125rem 0.625rem rgba(0, 0, 0, 0.15);

  &:hover {
    background: #b3b3b3;
    color: #fff;
  }

  @media (max-width: 48rem) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;
